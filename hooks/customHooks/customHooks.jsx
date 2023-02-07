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





// useForm ###############
// useForm.jsx
const types = {
    cep: {
        regex: /\d{5}-?\d{3}/,
        message: 'Cep inválido',
    },
    email: {
        regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: 'Digite um email válido',
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(null)

    function validate(value) {
        if (type === false) return true;

        if (value.length === 0) {
            setError('Preencha um valor')
            return false
        } else if (!types[type]?.regex.test(value)) {
            setError(types[type].message)
            return false
        } else {
            setError(null)
            return true
        }
    }

    function onChange(event) {
        if (error) {
            validate(event.target.value)
        }
        setValue(event.target.value)
    }

    return {
        value,
        setValue,
        error,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value)
    };
}


// -----------------
// App
const AppForm = () => {
    const cep = useForm('cep');
    const email = useForm('email');
    const nome = useForm();
    const sobrenome = useForm(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (cep.validate() && email.validate() && nome.validate()) {
            // fetch para envio do dado
            console.log('Enviou')
        } else {
            console.log('Não enviou')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="cep">CEP</label>
            <input 
                type="text" 
                id="cep" 
                { ...cep }
            />
            {cep.error && <p>{cep.error}</p>}
            
            <label htmlFor="email">CEP</label>
            <input 
                type="text" 
                id="email" 
                { ...email }
            />
            {email.error && <p>{email.error}</p>}
            
            <label htmlFor="nome">CEP</label>
            <input 
                type="text" 
                id="nome" 
                { ...nome }
            />
            {nome.error && <p>{nome.error}</p>}
            
            <label htmlFor="sobrenome">CEP</label>
            <input 
                type="text" 
                id="sobrenome" 
                { ...sobrenome }
            />
            {sobrenome.error && <p>{sobrenome.error}</p>}
            
            <button>Enviar</button>
        </form>
    )
}