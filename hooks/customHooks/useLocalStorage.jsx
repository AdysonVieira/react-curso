// useLocalStorage #############
// Recebe uma chave e um valor incial, busca no localStorage se há algum item e seta na state, quando a state é modificada o novo valor é armazenado no localStorage
const useLocalStorage = (key, inicial) => {
    const [state, setState] = React.useState(() => {
        const local = window.localStorage.getItem(key);
        return local ? local : inicial;
    });

    React.useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [key, state]);

    return [state, setState]
}