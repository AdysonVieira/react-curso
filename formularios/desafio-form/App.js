import React from 'react';
import './App.css';
import Radio from './Radio';


const App = () => {
  const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];
  
  const [data, setData] = React.useState(null)
  const [count, setCount] = React.useState(0)
  const [index, setIndex] = React.useState(0)
  
  function handleSubmit(event) {
    event.preventDefault();
    if (data === perguntas[index].resposta) {
      setCount((prev) => prev += 1)
    }
    if (index <= perguntas.length - 1) {
      setIndex((prev) => prev += 1)
    }
  }

  if (index === perguntas.length) {
    return <div>Você acertou {count} de {perguntas.length}</div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{perguntas[index].pergunta}</h1>
      <Radio
        options={perguntas[index].options}
        value={data}
        setValue={setData}
      />
      <button>Próxima</button>
    </form>
  )
}

export default App;
