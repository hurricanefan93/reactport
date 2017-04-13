import React, { Component } from 'react'
import ghImage from '../images/githublink.png'
import fbImage from '../images/facebook-icon.png'
import twImage from '../images/circle.png'
import lnkImage from '../images/linkedin-round.png'
class App extends Component {

state = {
  user: [],
  profile: [],
  name: [],
  location: [],
  bio: [],
  repos: [],
  repoTitle: []
}

componentDidMount() {
    // the URL to "get" todo items
    const user= 'https://api.github.com/users/hurricanefan93'
    const starred='https://api.github.com/users/hurricanefan93/starred'
    // make an AJAX request to that URL
    window.fetch(user)
      // fetch returns a promsise, which yeilds the "response", we call it 'r'
      // The response has a method json(), that returns another promise
      .then(r => r.json())
      // then JSON is done parsing, the promise will yeild the "data"
      .then(data => {
        // use the data as the state for our items
        this.setState({
          profile: data.avatar_url,
          name: data.name,
          location: data.location,
          bio: data.bio
        })
      })
      window.fetch(starred)
      .then(r => r.json())
      .then(data => {
        for(let i = 0; i < data.length; i++) {
          this.setState({
            repos: [...this.state.repos, data[i].html_url],
            repoTitle: [...this.state.repoTitle, data[i].description]
          })
        }
      })
  }


  render () {
    return <div className= 'App'>
    <header>
    <div><h1>{this.state.name}</h1></div>
    <div><img className='headshot' src={this.state.profile} /></div>
    <div><p>{this.state.location}</p></div>
    <div className='bio'><p>{this.state.bio}</p></div>
    <a href={this.state.repos[0]}>{this.state.repoTitle[0]} </a>
    <a href={this.state.repos[1]}>{this.state.repoTitle[1]} </a>
    <a href={this.state.repos[2]}>{this.state.repoTitle[2]} </a>
    </header>
    <footer>
    <a href='https://github.com/hurricanefan93'><img src={ghImage} height='75' width='75' /></a>
    <a href='https://www.facebook.com/garret.morales.5'><img src={fbImage} height='75' width='75' /></a>
    <a href='https://twitter.com/Bassface69'><img src={twImage} height='75' width='75' /></a>
    <a href='https://www.linkedin.com/feed/'><img src={lnkImage} height='75' width='75' /></a>
    </footer>
    </div>
  }
}

export default App
