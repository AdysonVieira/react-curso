import React from 'react';
import './App.css';
import ButtonOpenModal from './ButtonOpenModal';
import Modal from './Modal';



const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <p>{ativo ? 'Modal Aberto' : 'Modal Fechado'}</p>
      <Modal ativo={ativo} setAtivo={setAtivo}/>
      <ButtonOpenModal setAtivo={setAtivo}/>
    </div>
  )

}

export default App;
