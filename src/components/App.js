import React, { Component } from 'react'
import ghImage from '../images/githublink.png'
import fbImage from '../images/facebook-icon.png'
import twImage from '../images/circle.png'
import lnkImage from '../images/linkedin-round.png'
import Repos from './Repos'
class App extends Component {

state = {
  user: [],
  profile: [],
  name: [],
  location: [],
  bio: [],
  starred: [],
  repoName: []
}

componentDidMount() {
    const user= 'https://api.github.com/users/hurricanefan93'
    const starredUrl='https://api.github.com/users/hurricanefan93/starred'
    window.fetch(user)
      .then(r => r.json())
      .then(data => {
        this.setState({
          profile: data.avatar_url,
          name: data.name,
          location: data.location,
          bio: data.bio
        })
      })
      window.fetch(starredUrl)
      .then(r => r.json())
      .then(data => {
          this.setState({
            starred: data
          })
      })
    }


  render () {
    return <div className= 'App'>
    <header>
    <div><h1>{this.state.name}</h1></div>
    <div><img className='headshot' src={this.state.profile} /></div>
    <div className='location'><p>{this.state.location}</p></div>
    <div className='bio'><p>{this.state.bio}</p></div>
    </header>
    <div className='workinfo'>
    <p>Some Works</p>
    <Repos starred={this.state.starred} />
    </div>
    <footer>
    <a href='https://github.com/hurricanefan93'><img src={ghImage} height='75' width='75' /></a>
    <a href='https://www.facebook.com/garret.morales.5'><img src={fbImage} height='75' width='75' /></a>
    <a href='https://twitter.com/Bassface69'><img src={twImage} height='75' width='75' /></a>
    <a href='https://www.linkedin.com/feed/'><img src={lnkImage} height='75' width='75' /></a>
    </footer>
    <p> &copy; 2017 Garret Morales </p>
    </div>
  }
}

export default App
