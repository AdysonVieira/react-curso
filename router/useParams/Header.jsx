import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='produto' end>Produto</NavLink>
    </nav>
  )
}

export default Header