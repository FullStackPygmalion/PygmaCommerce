import React from 'react';
import logo from './logo.svg';
import '../src/App';
import Header from './Components/header/header.js';
import Login from './Components/login/login.js';
import Footer from './Components/footer/footer.js';
import './css/bootstrap.css';

function App() {
  return (
    <div>
      <Header/>
      
      
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

export default App;
