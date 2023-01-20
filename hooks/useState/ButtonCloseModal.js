import React from 'react'

const ButtonCloseModal = ( {setAtivo} ) => {
  return (
    <button onClick={() => setAtivo(false)}>Fechar</button>
  )
}

export default ButtonCloseModal