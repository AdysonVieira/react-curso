import React from 'react'
import { useNavigate } from 'react-router-dom'

// Exemplo de Componente de Login
const Login = () => {

    const navigate = useNavigate();
    
    function handleClick() {
        console.log('Fazer Login')
        navigate('/sobre')
    }

    return (
        <div>
        <h1>Login</h1>
        <button onClick={handleClick}>Fazer Login</button>
        </div>
    )
}

export default Login
