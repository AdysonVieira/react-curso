import React from 'react'
import { GlobalContext } from './GlobalContext'

const ButtonClear = () => {
    const { clearData } = React.useContext(GlobalContext)
  return (
    <button onClick={() => clearData()}>Limpar</button>
  )
}

export default ButtonClear