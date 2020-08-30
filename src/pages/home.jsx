import React from 'react';
import logo from './logo.svg';
// import '../src/App';
import Home from  './src/pages/home.jsx';
import Header from './components/header/header.js';
import Login from './components/login/login.js';
import Footer from './components/footer/footer.js';
import './css/bootstrap.css';
import ProductDetail from './components/ProductDetail.jsx'

function Home() {

   /*Cambio desde developer */
  const product = {
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

      <div className='container'>
        <ProductDetail product={product} />
      </div>
     
      <Login/>

     
      <Footer/>
    </div>
    
  );
}

export default Home
