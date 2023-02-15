// Head ###########
// No React não temos acesso direto as tags e informações do Head. Porém com o uso de rotas é essencial mudar o título e descrição de cada rota. Podemos fazer isso através de um componente ou custom hook.

// Head.js
const Head = (props) => {
    React.useEffect(() => {
        document.title = props.title;
        document
            .querySelector("meta[name='description']")
            .setAttribute('content', props.decription);
    }, [props])

    return <></>;
}