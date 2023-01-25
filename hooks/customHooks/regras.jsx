// Top Level
// Não utiliza os hooks dentro de funções, loops ou condicionais

const App = () => {
    // Correto
    React.useEffect(() => {
        document.title = 'Título novo';
    }, [])
    
    // Errado
    let condicao = false
    if (condicao) {
        React.useEffect(() => {
            document.title = 'Título novo';
        }, [])
    }
    
    // Errado
    function mudarTitulo() {
        React.useEffect(() => {
            document.title = 'Título novo';
        }, [])
    }
    
    // Errado
    for (let i; i < 10; i++) {
        React.useEffect(() => {
            document.title = 'Título novo';
        }, [])
    }
}



// Componentes e Custom Hooks
// Utilize hooks apenas em componentes e em custom hooks.

// Errado, mas poderia se transformar em custom hook usando o useNumeroAleatorio
function numeroAleatorio() {
    const numero = Math.random();
    React.useEffect(() => {
        document.title = numero;
    }, [])
    return numero;
}

function useNumeroAleatorio() {
    React.useEffect(() => {
        document.title = Math.random();
    }, [])
}
