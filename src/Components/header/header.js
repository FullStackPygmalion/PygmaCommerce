// import React from './node_modules/react';
import React from 'react';
import logo from '../../logo.svg';
import './header.css';

function Header(){
    return(
        <header class="d-flex justify-content-between pl-5 pr-5 pt-2">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Inicia Sesión</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Servicios</a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> */}
            </ul>

            <figure className="container-logo-header d-flex justify-content-center align-items-center mb-0 mr-0">
                <img src={logo} className="logo-react" alt="Logo"/>
            </figure>
        </header>
    )
}

export default Header