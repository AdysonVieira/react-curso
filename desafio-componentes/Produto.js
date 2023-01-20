import React from 'react'

const Produto = ( {nome, propriedades} ) => {
  return (
    <div style={{border: '1px solid black', margin: '20px', padding: '20px'}}>
        <p>{nome}</p>
        <ul>
            {propriedades.map( (propriedade) => <li key={propriedade}>{propriedade}</li>)}
        </ul>

    </div>
  )
}

export default Produto