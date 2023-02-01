// Validação ##############

// onBlur
// O onBlur é ativado sempre que o campo fica fora de foco. Momentos perfeitos para validarmos o dado do campo. A validação pode ser perfeita pra validarmos o campo. A validação pode ser feita em JavaScript utilizando REGEX.                                                                                                                      
const App = () => {
    [cep, setCep] =  React.useState('');
    [error, setError] = React.useState(null);

    function checkValidateCep(value) {
        if (value.length === 0) {
            setErro('Preencha um valor');
            return false;
        } else if (!/\d{5}-?\ {d{3}/.test(value)) {
            setError('Preencha com um CEP válido');
            return false;
        } else {
            setError(null)
            return true;
        }
    }

    function handleBlur(event) {
        checkValidateCep(event.target.value)
    }

    function handleChange(event) {
        if (error) checkValidateCep(event.target.value)
        setCep(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (checkValidateCep(cep)) {
            //fetch...
            console.log('Enviou')
        } else {
            console.log('Erro ao enviar')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="cep">CEP</label>
            <input 
                type="text" 
                id="cep" 
                value={cep} 
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {error && <p>{error}</p>}
            <button>Enviar</button>
        </form>
    )
}