import React from 'react'

const ButtonOpenModal = ( { setAtivo } ) => {
  return (
    <button onClick={() => setAtivo(true)}>Abrir</button>
  )
}

export default ButtonOpenModal