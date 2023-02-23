// React.useReducer #########
// O useReducer serve para lidarmos com estados que possuam funções fixas responsáveis por modificar o mesmo.

function reducer(state, action) {
    switch (action) {
        case 'AUMENTAR':
            return state + 1;
        case 'DIMINUIR':
            return state - 1;
        default:
            throw new Error()
    }
}

const App = () => {
    const [state, dispatch] = React.useReducer(reducer, 0)

    return (
        <div>
            <button onClick={() => dispatch('AUMENTAR')}>+</button>
            <button onClick={() => dispatch('DIMINUIR')}>-</button>
        </div>
    )
}




// Exemplo com Array

function reducer(state, action) {
    switch (action.type) {
        case 'REMOVE':
            return state.filter((item) => item !== action.content);
        case 'ADICIONA':
            return [...state, action.content];
        default:
            throw new Error();
    }
}

const App2 = () => {
    const [state, dispatch] =  React.useReducer(reducer, ['Banada', 'Uva'])

    return (
        <div>
            <button onClick={() => dispatch({ type: 'REMOVE', content: 'Banana'})}>Remove Banana</button>
            <button onClick={() => dispatch({ type: 'ADICIONA', content: 'Laranja'})}>Remove Laranja</button>
        </div>
    )
}

