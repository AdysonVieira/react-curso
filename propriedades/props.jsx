// PROPRIEDADES ############
// Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. Esses são conhecidos comos propriedades ou props

const Titulo = (props) => {
    return <h1>{props.texto}</h1>
};

const App = () => {
    return (
        <section>
            <Titulo texto="Meu Primeiro Título"/>
            <Titulo texto="Meu Segundo Título"/>
        </section>
    )
}


// Desestruturação
const Titulo2 = ( {texto, cor} ) => {
    return <h1 style={ {color: cor} }>{texto}</h1>
};

const App2 = () => {
    return (
        <section>
            <Titulo cor="red" texto="Meu Primeiro Título"/>
            <Titulo cor="blue" texto="Meu Segundo Título"/>
        </section>
    )
}


// Com Children
// Children é o filho passado entre a tag do componente
const Titulo3 = ( {texto, cor, children} ) => {
    return <h1 style={ {color: cor} }>{texto}, {children}</h1>
};

const App3 = () => {
    return (
        <section>
            <Titulo cor="red" texto="Meu Primeiro Título"/>
            <Titulo cor="blue" texto="Meu Segundo Título"/>
            <Titulo cor="blue" texto="Meu Segundo Título">
                Isso é o Children
            </Titulo>
        </section>
    )
}

// Rest e Spread
// Podesse passar quantas propriedades desejar usando Rest e Spread
const Input = ( {type, id, name, ...props} ) => {
    return <input type={type} id={id} name={name} {...props}/>
}



// Dados
// Podemos passar diferentes tipos de dados e até outros componentes nas propriedades

const Header = ({logado, nome}) => {
    if (logado) {
        return <h1>Bem-vindo, {nome}</h1>
    } else {
        return <h1>Desconectado</h1>
    }
}

const Apps = () => {
    const logado = true
    const nome = 'Adyson'
    return (
        <Header logado={logado} nome={nome} />
    )
}