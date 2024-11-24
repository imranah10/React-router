import React from 'react'
import Home from './Home'
import { NavLink, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <Home />
      <h1 style={{background:'yellow'}}>Contact page</h1>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <NavLink to='youtube'>Youtube</NavLink>
      <NavLink to='twitter' >Twitter</NavLink>
      <NavLink to='github' >Github</NavLink>
      </div>
      <Outlet />

    </div>
  )
}

export default Contact
