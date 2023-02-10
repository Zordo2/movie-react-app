import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
function Nav() {
  return (
    <div>
        <ul>
        <li><NavLink to='home'>Home</NavLink></li>
        <li><NavLink to='movie'>Movies</NavLink></li>
        <li><NavLink to='about'>About Us</NavLink></li>
        <li><NavLink to='login'>Login</NavLink></li>
        </ul>
    </div>
  )
}

export default Nav