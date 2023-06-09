import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark" style={{ background: 'linear-gradient(to right, blue, black, black,blue)' }}>
  <div className="container">
    <NavLink to={'/'} className="navbar-brand" >Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={'/'} className="nav-link" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/contact'} className="nav-link" >Contact</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={'/login'} className="nav-link" >Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/regsiter'} className="nav-link" >Regsiter</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
