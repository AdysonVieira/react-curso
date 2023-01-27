// Checkbox ############
// O estado do checkbox está relacionado ao checked

// Exemplo com um checkbox
const App = () => {
    const [checkbox, setCheckbox] = React.useState(flase);

    function handleChange({ target }) {
        setTermos(target.checked);
    }

    return (
        <form>
            <label>
                <input
                    type="checkbox"
                    value="termos"
                    checked={checkbox}
                    onChange={handleChange}
                />
                Aceito os termos de serviço.
            </label>
        </form>
    )
}


// Exemplo com múltiplos checkbox
// Podemos definir um estado para cada item ou uma array que irá conter todos os itens selecionados.

const App2 = () => {
    const [cores, setCores] = React.useState([]);

    function handleChange({ target }) {
        if (target.checked) {
            setCores([ ...cores, target.value]);
        } else {
            setCores(cores.filter((cor) => cor !== target.value))
        }
    }

    return (
        <form>
            <label>
                <input
                    type="checkbox"
                    value="azul"
                    checked={cores.includes('azul')}
                    onChange={handleChange}
                />
                Azul
            </label>
            <label>
                <input
                    type="checkbox"
                    value="vermelho"
                    checked={cores.includes('vermelho')}
                    onChange={handleChange}
                />
                Vermelho
            </label>
        </form>
    )

}