import React from 'react'
import bakery from '../assets/bakery_logo.jpg'; 
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <img src={bakery} alt="bake"/>
      </div>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
