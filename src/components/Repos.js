import React, { Component } from 'react'

class Repos extends Component {
  render () {
    const link = this.props.starred.map((repo, i) => {
      return <a className={`pic${i + 1}`} href={repo.html_url} key={i}>
        <img src={`https://raw.githubusercontent.com/hurricanefan93/${repo.name}/master/screenshot.png`} height='120' width='180' key={i} />
      </a>
    })

    return (
      <div className='linkpics'>
        {link}
      </div>
    )
  }
}
export default Repos
