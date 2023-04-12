import React from 'react';
import { useState, useEffect } from 'react';

import logo from '../../img/logo1.svg';
import burger from '../../img/burger.svg';
import './header.scss';

const Header = () => {

    const body = document.querySelector('body');

    const [activeMenu, toggleActiveMenu] = useState(false);

    function toggleMenuMode() {
        if (window.screen.width <= 450) {
            toggleActiveMenu(!activeMenu);
            body.classList.toggle('fix');
          }
      }

    return (
        <>
            <header>
                <div className="wrapper header-wrapper">
                    <div className="logo-container">
                        <a href="#home">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <div className="burger-menu" onClick={toggleMenuMode}>
                        <img src={burger} alt="burger menu" />
                    </div>
                    <ul className={activeMenu ? 'header-menu active' : 'header-menu'}>
                        <a href="#" onClick={toggleMenuMode}><li>Home</li></a>
                        <a href='#about' onClick={toggleMenuMode}><li>About Us</li></a>
                        <a href="#service" onClick={toggleMenuMode}><li>Service</li></a>
                        <a href="#people" onClick={toggleMenuMode}><li>People</li></a>
                        <a href="#products" onClick={toggleMenuMode}><li>Products</li></a>
                        <a href="#contact" onClick={toggleMenuMode}><li>Contact</li></a>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;