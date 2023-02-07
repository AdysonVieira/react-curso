// Styled Components
// Permite escrevermos o CSS diretamente no JavaScript. Ao invés de classes, criamos componentes com um estilo único.

// npm install styled-components
// vscode-styled-components

import styled from 'styled-components'

export const Titulo = styled.h1`
    font-size: 20px;
    color: blue;
`;

const Paragrafo = styled.p`
    font-size: 16px;
    color: gray;
`;

const App = () => {
    return (
        <div>
            <Titulo>Meu título</Titulo>
            <Paragrafo>Esse é um paragrafo com styled components</Paragrafo>
        </div>
    )
}


// styled
// O styled é um objeto com diferentes métodos que representam as tags de HTML.

const ProdutosContainer = styled.div`
    display: flex;
`;

const Produto = styled.div`
    flex: 1;
`;

const Titulo = styled.h1`
    font-size: 2rem;
`;

const App2 = () => {
    return (
        <ProdutosContainer>
            <Produto>
                <Titulo>Notebook</Titulo>
            </Produto>
            <Produto>
                <Titulo>Computador</Titulo>
            </Produto>
        </ProdutosContainer>
    )
}


// Props
// Podemos passar propriedades como em um component de React

const Preco = styled.p`
    background-color: ${(props) => props.cor};
    color: white;
    display: inline-block;
    border-radius: 5px;
    padding: 0.5rem;
    `;

const App3 = () => {
    return (
        <ProdutosContainer>
            <Produto>
                <Titulo>Notebook</Titulo>
                <Preco cor="#84e">R$20000</Preco>
            </Produto>
            <Produto>
                <Titulo>Smartphone</Titulo>
                <Preco cor="#F0e">R$20000</Preco>
            </Produto>
        </ProdutosContainer>
    )
}


// Estado
// Podemos passar o estado como uma propriedade e modificarmos certos estilos com base no mesmo.

const Button = styled.button`
    background-color: ${(props) => props.ativo ? '#FFF' : '#000'};
    color: ${(props) => props.ativo ? '#000' : '#FFF'};
    border-radius: 5px;
    padding: 0.5rem;
    cursor: pointer;

`;
const App4 = () => {
    const [ativo, setAtivo] = React.useState(false)

    function handleClick() {
        setAtivo(!ativo)
    }
    return (
        <ProdutosContainer>
            <Produto>
                <Titulo>Notebook</Titulo>
                <Preco cor="#84e">R$20000</Preco>
                <Button ativo={ativo} onClick={handleClick}>Comprar</Button>
            </Produto>
            <Produto>
                <Titulo>Smartphone</Titulo>
                <Preco cor="#F0e">R$20000</Preco>
                <Button ativo={ativo}>Comprar</Button>
            </Produto>
        </ProdutosContainer>
    )
}


// Pseudo
// Podemos definir o estado de :hover ou criar elementos com o ::after ou ::before utilizando o & na frente do elemento

const Comprar = styled.button`
    font-size: 1.5rem;
    background: transparent;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    &:hover {
        background: black;
        color: white;
    }
    &::before {
        display: block;
        content: "";
    }
`;