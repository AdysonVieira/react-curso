// createContext ##############
// O contexto irá permitir passarmos dados/estado a todos os componentes sem a necessidade de utilizar propriedades. Serve principalmente para dados/estados globais como, por exemplo, dados do usuário logado.

const App = () => {

    return (
        <UserContext.Provider value={ {nome: 'Adyson', idade: 32}}>
            <Produto />
        </UserContext.Provider>
    )
}


// Exemplo de Aplicação

import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const App2 = () => {
    return (
        <GlobalStorage>
        <Produto />
        </GlobalStorage>
    );
}

export default App2;





