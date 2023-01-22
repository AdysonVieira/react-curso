// useEffect ###############
// Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. Com o useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.

//useEffect((callback), [deps])

const App = () => {
    const [contar, setContar] = React.useState(0);

    React.useEffect( () => {
        console.log('Ocorre ao renderizar e ao atualizar');
    },[])

    return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}




// Array de Dependências
// No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma lista de dependências. A lista de dependências serve para informamos quando o efeito deve ocorrer.

const App2 = () => {
    const [contar, setContar] = React.useState(0);
    // Uma array vazia indica que o efeito não possui nenhuma dependencia, assim o mesmo só irá ocorrer quando o componente é renderizado. O efeito ocorre logo após a renderização do mesmo
    
    React.useEffect( () => {
        console.log('Apenas quando renderiza');
    }, []);
    
    // Antes de renderizar e toda vez atualizar o componente
    console.log('Sempre ocorre, mas antes do useEffect');
    
    // Agora a dependência está no estado contar, assim sempre que contar for atualizado este efeito será ativado
    React.useEffect( () => {
        console.log('Toda vez que atualiza o contar')
        document.title = 'Total ' + contar;
    }, [contar])
    
    return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}




// Dependências Obrigatórias
// Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array
const App3 = () => {
    const [contar, setContar] = React.useState(0);
     
    React.useEffect( () => {
        document.title = 'Total ' + contar;
        // o ESlint irá indicar que você possui uma dependência não declarada
    }, [])
    
    React.useEffect( () => {
        document.title = 'Total ' + contar;
    }, [contar])


    
    return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}




// Componente Montou
// O useEffect será especialmente utilizado quando precisamos definir que deve ocorrer uma vez apenas, como o fetch de dados no servidor, por exemplo

const App5 = () => {
    const [contar, setContar] = React.useState(0);
    const [dados, setDados] = React.useState(null);

    React.useEffect( () => {
        // se o fetch estivesse fora do useEffect, toda vez que o componente fosse atualizado, o mesmo seria executado
        fetch('url')
            .then((response) => response.json())
            .then((json) => setDados(json))
    }, [])
}



// Múltiplos Efeitos
// Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.
const App6 = () => {
    const [contar, setContar] = React.useState(0);
    const [modal, setModal] = React.useState(false);

    React.useEffect( () => {
        document.title = 'Total' + contar
    }, [contar])

    React.useEffect( () => {
        setContar(0)
    }, [modal])
}





// Antes de Desmontar
// As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito

const Produto = () => {
    // Utlizamos o useEffect para adicionarmos eventos direto ao DOM
    React.useEffect( () => {
        function handleScroll(event) {
            console.log(event)
        }

        window.addEventListener('scroll', handleScroll)

        // Limpa o evento quando o elemento é removido do DOM.
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
}