// Textarea
// No React o textare é utilizado como um input, uma tag única sem abertura/fechamento e com o value para definir o seu valor interno.

const App = () => {
    const [mensagem, setMensagem] = React.useState('');

    return (
        <form>
            <textarea
                id="mensagem"
                value={mensagem}
                rows="5"
                onChange={(event) => setMensagem(event.target.value)}
            />
            <p>{mensagem}</p>
        </form>
    )
}