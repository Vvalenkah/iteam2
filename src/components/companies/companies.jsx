import React from 'react';

import './companies.scss';

import compAdobe from '../../img/comp-adobe.png';
import compWP from '../../img/comp-wordpress.png';
import compJQ from '../../img/comp-jquery.png';
import compEnvato from '../../img/comp-envato.png';

import benefit1 from '../../img/benefits-1.svg';
import benefit2 from '../../img/benefits-2.svg';
import benefit3 from '../../img/benefits-3.svg';

const Companies = () => {
    return (
        <>
            <div className="wrapper">
                <div className="companies-container">
                    <img src={compAdobe} alt="Adobe" />
                    <img src={compWP} alt="WordPress" />
                    <img src={compJQ} alt="JQuery" />
                    <img src={compEnvato} alt="Envato" />
                </div>
                <div className="benefits">
                    <div className="benefits__card benefits__card--1">
                        <img src={benefit1} alt="Easy import" />
                        <h3>Easy import</h3>
                        <p>
                            Nulla placerat mi vitae mauris
                            varius . Aliquam libero ante,
                            consectetur at.
                        </p>
                    </div>
                    <div className="benefits__card benefits__card--2">
                        <img src={benefit2} alt="Stunning Layouts" />
                        <h3>Stunning Layouts</h3>
                        <p>
                            Nulla placerat mi vitae mauris
                            varius . Aliquam libero ante,
                            consectetur at.
                        </p>
                    </div>
                    <div className="benefits__card benefits__card--3">
                        <img src={benefit3} alt="No Coding" />
                        <h3>No Coding</h3>
                        <p>
                            Nulla placerat mi vitae mauris
                            varius . Aliquam libero ante,
                            consectetur at.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Companies;