import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Essa é a Home</h1>
        <Link to="produto/notebook">Notebook</Link>
        <Link to="produto/notebook">Smartphone</Link>
    </div>
  )
}

export default Home