import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Product from './Produtos';


const App = () => {
  const { pathname } = window.location
  
  let Content;
  if (pathname === '/produtos') {
    Content = Product
  } else {
    Content = Home
  }
  
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
