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

const types = {
    cep: {
        regex: /\d{5}-?\d{3}/,
        message: 'Cep inválido',
    },
}

// useForm ###############
const useForm = (value) => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    function validate(value) {
        if (value.length === 0) {
            setError()
            return false
        } else if (!types[type].regex.test(value)) {
            setError(types[type].message)
            return false
        } else {
            setError(null)
            return true
        }
    }

    function onChange(event) {
        if (error) validate(event.target.value)
        setValue(event.target.value)
    }

    return {
        value,
        setValue,
        error,
        onChange,
        onBlur: () => validate(value),
    };
}


// -----------------

const AppForm = () => {
    const { cep, setCep } = useForm(cep);
    [error, setError] = React.useState(null);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="cep">CEP</label>
            <input 
                type="text" 
                id="cep" 
                value={cep} 
            />
            {error && <p>{error}</p>}
            <button>Enviar</button>
        </form>
    )
}