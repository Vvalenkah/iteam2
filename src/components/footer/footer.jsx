import React from 'react';

import './footer.scss';
import contactsPhone from '../../img/contacts-phone.svg';
import contactsMail from '../../img/contacts-mail.svg';
import contactsAddress from '../../img/contacts-address.svg';

const Footer = () => {
    return (
        <>
            <div className="wrapper-black wrapper-black__contacts">
                <div className="wrapper">
                    <div className="contacts-container">
                        <div className="contacts-container contacts-container__card">
                            <img src={contactsPhone} alt="Phone" />
                            <div className="contacts-data">
                                <p>1-677-124-44225</p>
                                <p>1-677-124-44225</p>
                                <p>1-677-124-44225</p>
                            </div>
                        </div>
                        <div className="contacts-container contacts-container__card contacts-container__card--email">
                            <img src={contactsMail} alt="Phone" />
                            <div className="contacts-data">
                                <a href="https://github.com/Vvalenkah" target="blank">
                                    <p>Vvalenkah@.com</p>
                                </a>
                                <a href="https://github.com/Vvalenkah" target="blank">
                                    <p>Vvalenkah@.com</p>
                                </a>
                                <a href="https://github.com/Vvalenkah" target="blank">
                                    <p>Vvalenkah@.com</p>
                                </a>
                            </div>
                        </div>
                        <div className="contacts-container contacts-container__card">
                            <img src={contactsAddress} alt="Phone" />
                            <div className="contacts-data">
                                <p>New York </p>
                                <p>Bridgestone side 130</p>
                                <p>NY</p>
                            </div>
                        </div>
                    </div>
                    <ul className='footer-nav'>
                        <a href="#home"><li>Home</li></a>
                        <a href='#about'><li>About Us</li></a>
                        <a href="#service"><li>Service</li></a>
                        <a href="#people"><li>People</li></a>
                        <a href="#products"><li>Products</li></a>
                        <a href="#contact"><li>Contact</li></a>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;