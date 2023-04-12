import React from 'react';

import './support.scss';

const Support = () => {
    return (
        <>
        <div className="wrapper-black wrapper-black__support" id='contact'>
            <div className="wrapper">
                <h2>Support</h2>
                <p className='heading-p padding-left'>get in touch</p>
                <div className="contact-form">
                    <div className="contact-form contact-form__top">
                        <input type="text" placeholder='Name' autocomplete="new-password" />
                        <input type='email' placeholder='Email' autocomplete="new-password"/>
                        <input type='number' placeholder='Phone' autocomplete="new-password"/>
                    </div>
                    <div className="contact-form contact-form__bottom">
                        <input type="text" placeholder='Message' autocomplete="new-password"/>
                    </div>
                    <div className="support-btn-container">
                        <a href="#" className='learn-btn'>Send</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Support;