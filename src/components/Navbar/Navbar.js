import React from 'react'
import './Navbar.css'
import logo from './logo.jpg'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='main-container'>
    <nav className='nav-bar'>
      <img src={logo} className='logo'/>
<ul className='nav-ul'>
  <li><Link to="home" activeClass='active' spy={true} smooth={true} offset={50} duration={1500}>Home</Link></li>
  <li><Link to="About" activeClass='active' spy={true} smooth={true} offset={50} duration={2500}>About</Link></li>
  <li><Link to="Skills" activeClass='active' spy={true} smooth={true} offset={50} duration={3500}>Skills</Link></li>
  <li><Link to="Projects" activeClass='active' spy={true} smooth={true} offset={50} duration={4500}>Projects</Link></li>
  <li><Link to="contact" activeClass='active' spy={true} smooth={true} offset={50} duration={4500}>Contact</Link></li>
</ul>
    </nav>
    </div>
      )
}
export default Navbar