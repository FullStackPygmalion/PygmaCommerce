import React from 'react';
import logo from './logo.svg';
import '../src/App';
import Header from './Components/header/header.js';
import Login from './Components/login/login.js';
import Footer from './Components/footer/footer.js';
import './css/bootstrap.css';
import ProductDetail from './components/ProductDetail'

function App() {
  /* Cambio desde OtroComponente*/
  const producta = {
    name: 'Chocorramo',
    sku: 'CHR',
    description: 'Torta tradicional con cubierta de chocolate',
    imageURL:
      'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3501300-750-750/7702914596787.jpg?v=637244545407330000',
    publicURL: 'https://www.tiendasjumbo.co/ponque-chocoramo-x65g/p',
    price: 1550
  }
  return (
    <div>
      <Header/>
            <div className='conainter'>
      <ProductDetail product={product} />
    </div>
      <NewComponent />
      <Login/>

     
      <Footer/>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App
