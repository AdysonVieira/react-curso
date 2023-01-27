// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.


const App = () => {

    const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

    const [cores, setCores] = React.useState([])

    function handleChange(event) {
        if (event.target.checked) {
            setCores([ ...cores, event.target.value])
        } else {
            setCores(cores.filter((cor) => cor !== event.target.value))
        }
    }

    return (
        <form>
            { coresArray.map((cor) => (
                <label key={cor} style={{textTransform: 'capitalize'}}>
                    <input
                        type="checkbox"
                        value={cor}
                        checked={cores.includes(cor)}
                        onChange={handleChange}
                    />
                    {cor}
                </label>
            ))}
        </form>
    )
}