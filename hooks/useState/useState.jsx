// ESTADO ############
// O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

import { useState } from "react";

const App = () => {
    const ativo = true;

    return (
        <button disabled={!ativo}>{ativo ? 'Botão Ativo' : 'Botão Inativo'}</button>
    )
}



// useState
// O useState é uma função que retorna uma array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor. 

// Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado serão renderizados novamente junto com seus filhos. É isso que garante a reatividade de componentes duncionais no React

const App2 = () => {
    const [ativo, setAtivo] = useState(true)

    const handleClick = () => {
        setAtivo(!ativo)
    }

    return <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
}



// Multiplos Estados
// Não existe limites para o uso do useStat, podemos definir diversos no mesmo componente

const App3 = () => {
    const dadosObj = {
        nome: 'Adyson',
        idade: '32'
    }

    const [contar, setContar] = useState(0);
    const [ativo, setAtivo] = useState(true);
    const [dados, setDados] = useState(dadosObj)

    const handleClick = () => {
        setAtivo(!ativo);
        setContar(1)
        setDados({ ...dados, sobrenome: 'Vieira' })   
    }

    return <button onClick={handleClick}>{ativo ? dados.nome : contar}, {dados.sobrenome}</button>

}



// Props
// Podemos passar o estado e a função de modificação como propriedades para outros elementos

const App4 = () => {
    const [ativo, setAtivo] = React.useState(false);

    return (
        <div>
            <p>{ativo ? 'Modal Aberto' : 'Modal Fechado'}</p>
            <Modal ativo={ativo} setAtivo={setAtivo}/>
            <ButtonOpenModal setAtivo={setAtivo}/>
        </div>
    )
}