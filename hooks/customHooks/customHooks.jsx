// customHooks ############
// Podemos criar nossos próprios hooks, assim evitamos a repetição de código. Todo custom hook deve começar com a palavra use. Exemplo: useNomeDoHook. Podemos retornas o que quisermos do hook, seja um valor único, uma array, um objeto.


// useLocalStorage #############
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



// useFetch ##############
const useFetch = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const request = React.useCallback(async (url, option) => {
        let response
        let json
        try {
            setLoading(true)
            response = await fetch(url, option);
            json = await response.json();
        } catch(error) {
            setError(true)
            setData(null);
        } finally {
            setLoading(false)
            setData(json);
            return { response, json}
        }
    }, [])

    return {data, error, loading, request}
}
