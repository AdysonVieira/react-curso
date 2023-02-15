import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Essa é a Home</h1>
            <p>Texto da página Home</p>
            <nav>
                <Link to="produto/notebook">Notebook</Link>
                <Link to="produto/smartphone">Smartphone</Link>
            </nav>
        </div>
    )
}

export default Home
