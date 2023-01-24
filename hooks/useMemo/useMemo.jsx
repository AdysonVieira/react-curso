// useMemo ###########
// Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e uma array de dependências.

const App = () => {
    const [contar, setContar] = React.useState(0);
    const valor = React.useMemo(() => {
        const localStorageItem = window.localStorage.getItem('produto');
        // só será executado uma vez
        console.log('teste');
        return localStorageItem
    }, [])
    console.log({valor})

    return <button onClick={() => setContar(contar + 1)}>{valor}</button>

}


// Exemplo de Aplicação
// O useMemo é usado em casos expecíficos com ocorram operações lentas de JS (acima de 100ms)

function operacaoLenta() {
    let c
    for ( let i ; i < 10000000; i++ ) {
        c = i + i / 10
    }
    return c
}

const App2 = () => {
    const [contar, setContar] = React.useState(0);

    // verificando o tempo de execução da operacaoLenta
    // const t1 = performance.now()
    // const valor = operacaoLenta()
    // console.log(performance.now() - t1)

    // Executa uma vez e guarda o valor, dessa forma não fica sendo recarregando o valor toda vez que o componente é atualizado
    const valor = React.useMemo(() => operacaoLenta(), []);

    return <>...</>
}