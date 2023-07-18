import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <FaTwitter />
      <FaFacebook />
      <FaInstagram />
      </div>
      <p>&copy; 2024 varshneeld@gmail.com</p>
    </div>
  )
}

export default Footer;
