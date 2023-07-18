import React from 'react'
import wallpaper from '../assets/wallpaper.jpg'
import '../styles/Home.css'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="home" style={{backgroundImage:`url(${wallpaper})`}}>
    <div className="headerContainer">
      <h1>Doughy Delights</h1>
      <p>Oh look, it's chocolate o'clock</p>
      <Link to="/menu">
        <button>View Menu</button>
      </Link>
    </div>
    </div>
  )
}

export default Home
