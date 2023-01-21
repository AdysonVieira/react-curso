// ESTADO ############
// O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

import React, { useState } from "react";

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
        setContar((contar) => contar + 1)
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



// Reatividade
// Não modificar o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes

const App5 = () => {
    const [items, setItems] = React.useState(['Item 1', 'Item 2']);

    function handleClick() {
        // Errado! Não podemos modificar diretamente o estado
        items.push('Novo item');
    }

    function handleClickReativo() {
        setItems([ ...items, 'Novo Item']);
    }
}



// Callback
// Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retornado na função.

const App6 = () => {
    const [ativo, setAtivo] = React.useState(true);

    function handleClick() {
        // usando um callback | anterior é o valor ativo
        setAtivo((anterior) => !anterior)
    }

    return (
        <button onClick={handleClick}>
            {ativo ? 'Botão Ativo' : 'Botão Inativo'}
        </button>
    )
}

const ButtonModal = ({ setAtivo }) => {
    function handleClick() {
        setAtivo((ativo) => !ativo)
    }

    return <button onClick={handleClick}>Abrir</button>
}


// ============

const App7 = () => {
    // passando um callback para o valor inicial de ativo, no exemplo buscando no localStorage e retornando como o valor incial
    const [ativo, setAtivo] = React.useState(() => {
        const ativo = window.localStorage.getItem('ativo');
        return ativo
    });

    function handleClick() {
        // usando um callback | anterior é o valor ativo
        setAtivo((anterior) => !anterior)
    }

    return (
        <button onClick={handleClick}>
            {ativo ? 'Botão Ativo' : 'Botão Inativo'}
        </button>
    )
}





// React.strictMode
// No modo restrito o componente atualizado por uma state é renderizado duas vezes, afim de garantir a identificação de funções com efeitos colaterais (side effects) e eliminarmos as mesmas. Função com efeito colateral é aquela que modifica o estado que estão fora dela.

const App8 = () => {
    let [contar, setContar] = React.useState(1);
    const [items, setItems] = React.useState(['Item 1']);
    
    function handleClick() {
        setContar((contar) => {
            // Errado, efeito colateral | Uma função que altera o state deve ser restrita apenas a função de alterar o o estado, sem executar outras funções
            setItems((items) => [ ...items, 'Item ' + (contar + 1)] ) 
            return contar + 1
        })
        setItems([ ...items, 'Item ' + (contar + 1)] ) // Forma correta
    }

    return ( 
        <div>
            {items.map( (item) => <li key={item}>{item}</li>)}
            <button onClick={handleClick}>Clique</button>
        </div>
    )
}