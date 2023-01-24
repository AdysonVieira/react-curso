// useCallback ############
// Permite definirmos um callback e uma lista de dependências do callback. Esse callback só será recriado se essa lista de depdências for modificada, caso contrário ele não irá recriar o callback.

const App = () => {
    const [contar, setContar] = React.useState(0);

    // dessa forma a função só é criada uma vez
    const handleClick = React.useCallback(() => {
        setContar((n) => n + 1)
    }, []);

    return <button onClick={handleClick}>{contar}</button>
}
