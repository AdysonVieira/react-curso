import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <section>
        Conteúdo
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default App;
