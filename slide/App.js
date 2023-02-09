import React from 'react'
import Slide from './Slide';

function App() {
  const slides = [
    {
      id: '1',
      texto: 'Notebook'
    },
    {
      id: '2',
      texto: 'Tablet'
    },
    {
      id: '3',
      texto: 'Smartphone'
    },
  ]

  return (
    <Slide slides={slides} />
  );
}

export default App;
