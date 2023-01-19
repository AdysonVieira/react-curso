// EVENTOS ###########
// Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React, porém seguindo as especificações da W3C

const Produtos = () => {
    function handleClick(event) {
        alert('comprou: ' + event.target.innerText)
    }

    return (
        <div>
            <button onClick={ handleClick }>Camisa</button>
            <button onClick={ (event) => console.log(event.target) }   >Bermuda</button>
        </div>
    )
}

// Evento não sintático
const Evento = () => {
    function handleScroll(event) {
        console.log(event)
    }
    window.addEventListener('scroll', handleScroll)

    return (
        <div style={ {height: '200vh'} }>
            <button>Compre</button>
        </div>
    )
}