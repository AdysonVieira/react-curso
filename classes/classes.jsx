// extends React.Component ######
// Antes dos hooks a única forma de criarmos componentes com estados reativos era através da extensão da classe React.Component. O JSX que é renderizado pelo componente de classe deve estar dentro do retorno do método render().

// Produto.js
import React from "react";

class Produtos extends React.Component {
    render() {
        return (
            <div>
                <h1>Componente de Classe</h1>
            </div>
        )
    };
};





// Produto.js
class Produto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contar: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    // Quando o componente é montando, usar para fazer fetch
    componentDidMount() {
        // fetch(produtos...)
        console.log('Componente Montou')
    }

    // Quando o componente é atualizado
    componentDidUpdate() {
        document.title = this.state.contar
    }

    // Quando o componente sai da tela
    componentWillUnmount() {
        console.log('O componente desmontou')
    }

    handleClick() {
        this.state((state) => ({ contar: state.contar + 1 }))
    }

    render() {
        return (
            <div>
                <h1>{this.props.titulo}</h1>
                <p>{this.state.contar}</p>
                <button onClick={this.handleClick}>Adicionar</button>
            </div>
        )
    };
};

export default Produto;



// App.js
const App = () => {
    const [ativar, setAtivar] = React.useState(true)
    return (
        <div>
            {ativar && <Produto titulo='Esse é um titulo da classe' />}
            <button onClick={() => setAtivar(!ativar)}>Trocar</button>
        </div>
    )
}

// Lembrar que quando o compente dismonta o valor do estado se perde, no caso contar inicia do 0 novamente quando o componente é montado