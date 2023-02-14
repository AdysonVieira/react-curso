// useForm ###############

// Precisa implementar
const types = {
    cep: {
        regex: /\d{5}-?\d{3}/,
        message: 'Cep inválido',
    },
}

const useForm = (type) => {
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
        validate,
        onChange,
        onBlur: () => validate(value),
    };
}


// -----------------

const App = () => {
    const { cep, setCep, validate } = useForm(cep);
    const [error, setError] = React.useState(null);

    function handleSubmit(event) {
        event.preventDefault()
        validate(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="cep">CEP</label>
            <input 
                type="text" 
                id="cep" 
                value={cep}
                { ...cep }
            />
            {error && <p>{error}</p>}
            <button>Enviar</button>
        </form>
    )
}