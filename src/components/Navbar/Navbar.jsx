import React from 'react'
import './navbarCss.css'

export const Navbar = ({children}) => {
  return (
    <nav>
      <ul>
        {children}
      </ul>
    </nav>
  )
}
