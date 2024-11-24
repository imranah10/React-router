import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li> <NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li> <NavLink to='/login'>Login</NavLink></li>
            
        </ul>
      </nav>
    </div>
  )
}

export default Home
