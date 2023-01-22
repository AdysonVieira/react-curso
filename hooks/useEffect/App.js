import React from 'react';
import './App.css';
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


const App = () => {

  // Estado que armazena a preferencia
  const [preference, setPreference] = React.useState(null);
  // Estado que armazena os dados
  const [data, setData] = React.useState(null)

  // Efeito que faz fetch dos dados se existir uma preferencia ou ela mudar de valor
  React.useEffect( () => {
    if (preference) {
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${preference}`)
        .then((response) => response.json())
        .then((json) => setData(json))
    }
  }, [preference])

  // Efeito que verifica se há algum valor em preferencia no localStorage, se houver ela altera o estado de preference
  React.useEffect( () => {
    const preferenceLocal = window.localStorage.getItem('produto')
    if (preferenceLocal) setPreference(preferenceLocal)
  }, [])
  
  // Efeito que verifica se preference tem algum valor e seta esse valor no localStorage
  React.useEffect( () => {
    if (preference) window.localStorage.setItem('produto', preference)
  }, [preference])
  
  // função que se o valor do inner text do btn para o preference
  const handleClick = (event) => {
    setPreference(event.target.innerText)
  }
  
  return (
    <div>
      <h1>Preferência: {preference}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      {data && <Produto preference={preference}/>}
    </div>
  )
}

export default App;
