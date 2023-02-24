// React.memo ###########
// Retorna um componente memorizado, evitando que o mesmo seja atualizado toda vez que o estado de um elemento pai mudar. Use apenas para elementos que não dependam de estados diferentes.

// App.js

import React from "react";
// Header.js
const Header = () => {
    console.log('renderizou')
    return <div><h1>Header Aqui</h1></div>
}

export default React.memo(Header); // Ao exportar é chamado o método memo para sinalizar que o componente só será renderizado uma vez

// App.js
const App = () => {
    const [contar, setContar] = React.useState(0);
    return (
        <div>
            <Header />
            <button onClick={() => setContar(contar + 1)}>{contar}</button>
        </div>
    );
};