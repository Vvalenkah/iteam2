import React from 'react';

import about1 from '../../img/about-tech.png';
import './about.scss';

const About = () => {
    return (
        <>
            <div className="wrapper wrapper-about padding-add">
                <div className="img-container-about">
                    <img src={about1} alt="" />
                </div>
                <div  id='about' className="about-container margin-add padding-add-small">
                    <h2>About us</h2>
                    <p className='heading-p'>Technology</p>
                    <div className="about-container--desc">
                        <p>
                            Nulla placerat mi vitae mauris varius consequat.
                            Aliquam libero ante, consectetur at turpis sit
                            amet, congue Suspendisse porta bibendum
                            scelerisque.
                        </p>
                        <p>
                            Suspendisse porta bibendum scelerisque. 
                            Nulla placerat
                        </p>
                    </div>
                    <a href="#" className='learn-btn'>Learn more</a>
                </div>
            </div>
            <div className="wrapper wrapper-we-work" id='service'>
                <div className="about-container">
                    <h2 className='we-work-heading'>
                        We work with big and
                        small companies
                    </h2>
                    <div className="about-container--desc">
                        <p>
                            Nulla placerat mi vitae mauris varius consequat.
                            Aliquam libero ante, consectetur at turpis sit
                            amet, congue Suspendisse porta bibendum
                            scelerisque.
                        </p>
                        <p>
                            Suspendisse porta bibendum scelerisque. 
                            Nulla placerat
                        </p>
                    </div>
                    <a href="#" className='learn-btn'>Learn more</a>
                </div>
                <div className="histogram">
                    <div className="histogram__item">
                        <div className="histogram__item--inscr">
                            <p>App development</p>
                            <p>92%</p>
                        </div>
                        <div className="histogram__item--lines">
                            <div className="line--orange"></div>
                            <div className="line--grey"></div>
                        </div>
                    </div>
                    <div className="histogram__item">
                        <div className="histogram__item--inscr">
                            <p>User interface</p>
                            <p>88%</p>
                        </div>
                        <div className="histogram__item--lines">
                            <div className="line--pink"></div>
                            <div className="line--grey"></div>
                        </div>
                    </div>
                    <div className="histogram__item">
                        <div className="histogram__item--inscr">
                            <p>User experiences</p>
                            <p>95%</p>
                        </div>
                        <div className="histogram__item--lines">
                            <div className="line--green"></div>
                            <div className="line--grey"></div>
                        </div>
                    </div>
                    <div className="histogram__item">
                        <div className="histogram__item--inscr">
                            <p>Information Architecture</p>
                            <p>79%</p>
                        </div>
                        <div className="histogram__item--lines">
                            <div className="line--blue"></div>
                            <div className="line--grey"></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About;