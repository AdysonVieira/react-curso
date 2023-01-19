// REACT ELEMENT #############
// Todo o elemento React é criando com a função createElement. O Babel é responsável por transformar todo elemento JSX(que parece HTML) em funções de React

function App() {
    return <div id="container">Meu App</div>;
}
// é transformado em:
function App() {
    return React.createElement('div', {id: 'container'}, 'Meu App')
}


// Criando elemento com arrow function (mais utilizado) 
const Classe = () => {
    return <button>Comprar</button>
}


// Criando class
class Button extends React.Component {
    render() {
        return <button>Comprar</button>
    }
}




// COMPOSIÇÃO ###############
// O principal motivo de criarmos componentes é para podermos compor a interface com diversos componentes que podem ser reutilizados

const Titulo = () => {
    const numero = Math.random()
    return <h1>Meu titulo { numero }</h1> // usar {} para passar variáveis
}

const Button = () => {
    return <button>Comprar</button>
}

const MainNav = () => {
    return (
        <nav>
            <Titulo />
            <a href="#">Link 1</a>
            <Button /> 
        </nav>
    )
}





// EVENTOS ############
// Podemos atribuir eventos diretamente no elemento

const Produtos = () => {
    function handleClick(event) {
        alert('comprou: ' + event.target.innerText)
    }

    return (
        <div>
            <button onClick={ handleClick }>Camisa</button>
            <button onClick={ handleClick }>Bermuda</button>
        </div>
    )
}

// ----------

const Title = () => {
    const numero = Math.random()
    return <h1>Meu titulo { numero }</h1> // usar {} para passar variáveis
}

const Button = () => {
    const handleClick = (event) => {
        alert('Comprou')
    }

    return <button onClick={ handleClick }>Comprar</button>
}

const Nav = () => {
    return (
        <nav>
            <Title />
            <a href="#">Link 1</a>
            <Button />
            <Button />
        </nav>
    )
}





// HOOK #############
// Ultilizamos o React pela facilidade de sincronização do estado. Antes dos Hooks, isso só era possível em componentes criados por meio de classes.

const Compras = () => {
    // useState é um hook que define uma variável reativa
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <button onClick={ () => setCount(count + 1)}>Comprar: { count }</button>
            <p>Total: {count}</p>
            <p>Preço: R$ {count * 250}</p>
        </div>
    )
}




// CLASSNAME ###############
// A class é passada como className e pode receber expressões
const App = () => {
    const ativo = true
    const meuSite = 'https://www.github.io/adysonvieira'
    return (
        <a href={ meuSite } className={ ativo ? "ativo" : '' }>Link</a>
    )
}



// HTMLFOR #################
// Para o for usado em labels, usasse para htmlFor
const Form = () => {
    return (
        <React.Fragment>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" />
        </React.Fragment>
    )
}





// EXPRESSÕES/VARIÁVEIS ##############
// Expressões e variáveis podem ser colocadas dentro do JSX através das {}
const Form2 = () => {
    const nomeCompleto = {
        name: 'Adyson',
        sobrenome: 'Vieira'
    }

    return (
        <React.Fragment>
            <label htmlFor="nome">Nome</label>
            <input type="text" value={ nomeCompleto.name } name="nome" />

            <label htmlFor="sobrename">Sobrenome</label>
            <input type="text" value={ nomeCompleto.sobrenome} name="sobrenome" />
        </React.Fragment>
    )
}



// FUNÇÃO ##############
const Form3 = () => {
    const nomeCompleto = {
        name: 'Adyson',
        sobrenome: 'Vieira'
    }

    const mostraSobrenome = () => nomeCompleto.sobrenome

    return (
        <React.Fragment>
            <label htmlFor="sobrename">Sobrenome</label>
            <input type="text" value={ mostraSobrenome() } name="sobrenome" />
        </React.Fragment>
    )
}





// STYLE ######################
// O style irá receber um objeto com as propriedades do elemento em camelCase
const Estilo = () => {
    const estilo = {
        color: 'blue',
        fontSize: '16px',
        fontfamily: 'Helvetica'
    }

    return (
        <div>
            <p style={ estilo }>Meu Texto</p>
            <p style={ {color: 'green' } }>Meu Texto</p>
        </div>
    )
}
