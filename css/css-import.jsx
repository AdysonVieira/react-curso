// Import
// A forma mais simples de uso do CSS é importando o mesmo direto no JavaScript. A importação é efetuada pelo Webpack

// App.js
import './App.css';

const App = () => {
    return (
        <div className='container'>
            <p className='text'>Meu site</p>
        </div>
    )
}




// Componentes
// Ao importar um componente, os estilos importados do mesmo são automaticamente adicionados ao CSS final da build. Independente de você utilizar o componente ou não.

// App.js
import 'App.css'
import Title from './Components/Title';

const App2 = () => {
    return (
        <div className='container'>
            <Title text="Meu título" />
            <p className='text'>Meu site</p>
        </div>
    )
}



// Conflito
// Todos os arquivos serão unidos em um CSS final e você é responsável por garantir que os seletores sejam específicos, para evitar conflitos

import Title from './Components/Title';
import Produto from './Components/Produto';

const App3 = () => {
    return (
        <div>
            <Title text="Meu título" />
            <Produto />
        </div>
    )
}