import React from 'react';
import logo from '../../logo.svg';
import '../footer/footer.css';

function Footer(){
    return(
        <footer class="d-flex justify-content-center pl-5 pr-5 pt-2">
             <figure className="container-logo-header d-flex justify-content-center align-items-center mb-0 mr-0">
                <img src={logo} className="logo-react" alt="Logo"/>
            </figure>

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
        </footer>
    )
}

export default Footer