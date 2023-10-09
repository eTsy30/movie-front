import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'
export const Error = () => {
  return (
    <div className="error_container">
      <h1>404 </h1>
      <h2>page not found</h2>
      <NavLink to={'/'}>
        <i className="fa-solid fa-house"></i>
      </NavLink>
    </div>
  )
}
