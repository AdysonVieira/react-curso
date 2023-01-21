import React from 'react';
import './App.css';
import Card from './Card';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado


const App = () => {

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const handleClick = async (event) => {
    setLoading(true);
    const json = await (await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)).json();
    setData(json);
    setLoading(false);
  }

  return (
      <div>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>tablet</button>
        <button onClick={handleClick}>smartphone</button>
        {loading && <h1>Carregando</h1>}
        {!loading && data && <Card data={data}/>}
      </div>
  )
}

export default App;