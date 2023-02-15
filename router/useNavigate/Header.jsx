import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Link  } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <NavLink to='/' end activeStyle={{ color: tomato }}>Home</NavLink>

            <NavLink to='sobre' activeStyle={{ color: tomato }}>Sobre</NavLink>

            <NavLink to='produtos' activeStyle={{ color: tomato }}>Produtos</NavLink>

            <NavLink to='login' activeStyle={{ color: tomato }}>Login</NavLink>
        </nav>
    )
}

export default Header