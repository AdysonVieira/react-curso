// Imagens
// Importando imagens para dentro do projeto

import foto from "./img/foto.jpg"

const App = () => {
    return (
        <img src={foto} alt="" />
    )
}

// SVG
// Importando o arquivo SVG como ReactComponent passando o nome depois 
import { ReactComponent as Dog } from ".img/dog.svg"
import { ReactComponent as Cat } from ".img/cat.svg"

const App2 = () => {
    return (
        <Dog />
    )
}


// Criando componente SVG
// MenuSvg.js
const MenuSvg = ({ color }) => {
    return (
        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H25V2H0V0Z" fill={color}/>
            <path d="M0 8H25V10H0V8Z" fill={color}/>
            <path d="M0 16H25V18H0V16Z" fill={color}/>
        </svg>
    )
};

// App.js
import React from "react"

const App3 = () => {
    
    const [state, setState] = React.useState();
    
    function handleClick() {
        for (let i = 0; i < 256; i++) {
            setTimeout(() => {
                setState(`rgb(${i}, 100, 50)`)
            }, 30 * i)
        }
    }   

    return (
        <>
            <MenuSvg color={state}/>
            <button onClick={handleClick}>Mudar cor</button>
        </>
    )
}