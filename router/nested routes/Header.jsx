import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <NavLink to='/' end activeStyle={{ color: tomato }}>Home</NavLink>
            <NavLink to='sobre' end activeStyle={{ color: tomato }}>Sobre</NavLink>
            <NavLink to='produto' end activeStyle={{ color: tomato }}>Produto</NavLink>
        </nav>
    )
}

export default Header
