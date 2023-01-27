// Select ##########
// O value e onChange são definidos no select. Para definir um valor inicial, coloque o mesmo no useState.

const App = () => {
    const [select, setSelect] = React.useState('');

    return (
        <form>
            <select value={select} onChange={(event) => setSelect(event.target.value)}>
                <option disabled value="">Selecione</option>
                <option value="notebook">Notebook</option>
                <option value="tablet">Tablet</option>
                <option value="smartphone">Smartphone</option>
            </select>
            <p>{select}</p>
        </form>
    )
}