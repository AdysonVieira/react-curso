// Reatividade ##########
// Para criarmos campos de formulários reativos, devemos definir o estado para o value e a função atualizadora para o evento onChange

const App = () => {
    const [nome, setNome] = React.useState('');

    return (
        <form>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                id="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />
            <p>{nome}</p>
        </form>
    )
}


// Form ###########
// No form controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o onSubmit. O preventDefault() irá previnir o comportamento padrão, que seria de atualizar a página, enviando uma requisição para o que estiver em action="".

const App2 = () => {
    const [nome, setNome] = React.useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(nome)
    }

    return (
        <form>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                id="nome"
                name="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                onSubmit={handleSubmit}
            />
            <p>{nome}</p>
            <button>Enviar</button>
        </form>
    )
}



// Múltiplos Campos ###########
// Podemo definir um estado para cada campo

const App3 = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(nome)
    }

    return (
        <form>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                id="nome"
                name="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                onSubmit={handleSubmit}
            />
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onSubmit={handleSubmit}
            />
            <p>{nome}</p>
            <button>Enviar</button>
        </form>
    )
}




// Objeto ###########
// Podemos definir um objeto que irá contar todos os valores dos campos do formulário.

const App4 = () => {
    const [form, setForm] = React.useState({
        nome: "",
        email: "",
    });
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(nome)
    }

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value       })
    }

    return (
        <form>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <p>{nome}</p>
            <button>Enviar</button>
        </form>
    )
}