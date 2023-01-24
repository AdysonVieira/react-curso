// useRef ###########
// Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o omesmo para nos referirmos a um elemento do DOM sem precisarmos utilizar o querySelector ou similar.

const App = () => {

    const video = React.useRef();

    React.useEffect( () => {
        console.log(video.current);
    }, [])

    return <video ref={video}></video>
}



// Exemplo de Aplição
const App2 = () => {

    const [commentary, setCommentary] = React.useState([]);
    const [input, setInput] = React.useState('');
    const inputElement = React.useRef(); // criando uma referência

    const handleClick = () => {
        setCommentary([...commentary, input]);
        setInput('')
        inputElement.current.focus(); // manipulando o elemento referênciado, usando a propriedade current
    }

    return (
        <>
            <ul>
                {commentary.map((comment, index) => {
                    return <li key={index}>{comment}</li>
                })}
            </ul>
            <input
                type="text"
                value={input}
                ref={inputElement} // referenciando o input
                onChange={ ({target}) => {
                setInput(target.value)
            }} />
            <button onClick={handleClick}>Enviar</button>
        </>
    )
}



// Referência ###########
// O seu uso não é restrito apenas a elementos do DOM. Podemos utilizar também para guardarmos a referência de qualquer valor, como de um setTimeout, por exemplo.

const App3 = () => {
    const [contar, setContar] = React.useState(0);
    const [notification, setNotification] = React.useState(null)
    const timeoutRef = React.useRef();

    function handleClick() {
        setNotification('Obrigado por comprar');
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout( () => {
            setNotification(null);
        }, 1000)
        setContar(contar + 1)
    }

    return <>...</>
}

// Exemplo de Aplicação

const App4 = () => {
    const [carrinho, setCarrinho] = React.useState(0);
    const [notificacao, setNotificacao] = React.useState(null);
    const timeoutRef = React.useRef(); // 1 - crio uma referência

    function handleClick() {
        setCarrinho(carrinho + 1)
        setNotificacao('Item adicionado ao carrinho')

        // 3 - limpo o setTimeout armazenado na minha referência antes de chamar mais um setTimeout, caso o usuário clique várias vezes seguidas
        clearTimeout(timeoutRef.current);
        // 2 - minha referência recebe um setTimeout que após 2 segundos mudar o valor de notificacao para null
        timeoutRef.current = setTimeout(() => {
            setNotificacao(null)
        }, 2000)
    }
    
    return (
        <>
            <p>{notificacao}</p>
            <button onClick={handleClick}>Adicionar Item ao Carrinho {carrinho}</button>
        </>
    )
}