// useNavigate ############
// O hook useNavigate permite navegarmos programaticamente entre rotas. Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo a página da sua conta.

import { useNavigate } from 'react-router-dom';

// Exemplo de Componente de Login
const Login = () => {

    // hook do React Router Dom
    const navigate = useNavigate();
    
    function handleClick() {
        console.log('Fazer Login')

        // após a parte de login ser feita direciona o usuário para a página sobre. (precisa passar o caminho real)
        navigate('/sobre')
    }

    return (
        <div>
        <h1>Login</h1>
        <button onClick={handleClick}>Fazer Login</button>
        </div>
    )
}

export default Login2