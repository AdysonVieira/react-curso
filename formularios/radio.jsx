// Radio ##########
// No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked, o que retornar true irá marcar o botão.

const App = () => {
    const [ produto, setProduto ] = React.useState('');
    const [ cor, setCor ] = React.useState('');

    return (
        <form>
            <h1>Produtos</h1>
            <label>
                <input
                    type="radio"
                    name="produto"
                    value="notebook"
                    onChange={(event) => setProduto(event.target.value)}
                    />
                Notebook
            </label>

            <label>
                <input
                    type="radio"
                    name="produto"
                    value="smartphone"
                    onChange={(event) => setProduto(event.target.value)}
                />
                Smartphone
            </label>

            <h1>Cor</h1>
            <label>
                <input
                    type="radio"
                    name="cor"
                    value="azul"
                    onChange={(event) => setCor(event.target.value)}
                />
                Azul
            </label>

            <label>
                <input
                    type="radio"
                    name="cor"
                    value="vermelho"
                    onChange={(event) => setCor(event.target.value)}
                />
                Vermelho
            </label>
        </form>
    )
}