import React from 'react'
import logo from '../assets/logo.jpg'
import { Link, NavLink, replace, useNavigate } from 'react-router-dom'


const Navbar = () => {
  
  const navigate = useNavigate();

  return (
    <nav classname="navbar">
        <img src={logo} alt="logo" style={{width:"80px", height:"80px"}} />
        <div>
            <ul>
              <NavLink to="/"><li>Home</li></NavLink>
              <NavLink to="/about">  <li>About</li></NavLink>
              <NavLink to="/products"><li>Products</li></NavLink>
              <NavLink to="/contact"> <li>Contact</li></NavLink>
            </ul>            
        </div>
        <button onClick={() => navigate('/contact', {replace:true})}>Get Started</button>
    </nav>
             
    
  )
}

export default Navbar
