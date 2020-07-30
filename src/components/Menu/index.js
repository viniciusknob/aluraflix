// é um padrão todo componente ter seu próprio index.js
import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo" />
            </a>
        </nav>
    );
}

export default Menu;
