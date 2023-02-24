// useLocalStorage #############
// Recebe uma chave e um valor incial, busca no localStorage se há algum item e seta na state, quando a state é modificada o novo valor é armazenado no localStorage
const useLocalStorage = (key, inicial = '') => {
    const [storedValue, setStoredValue] = React.useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : inicial;
    });
    
    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    return [storedValue, setStoredValue]
}