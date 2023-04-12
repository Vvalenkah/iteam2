import React from 'react';

import './hero.scss';
import tech1 from '../../img/hero-tech-1.svg';
import tech2 from '../../img/hero-tech-2.svg';
import tech3 from '../../img/hero-tech-3.svg';
import tech4 from '../../img/hero-tech-4.svg';

const Hero = () => {
    return (
        <>
            <div className="hero"  id='home'>
                <div className="wrapper">
                    <div className="hero__text">
                        <h1>
                            INNOVATION
                            THAT DRIVES
                            EMOTION
                        </h1>
                        <p>The next level</p>
                    </div>
                    <div className="hero__technologies">
                        <div className="hero__technologies--card">
                            <div className="image-container image-container--1">
                                <img src={tech1} alt="" />
                                {/*<img src='../../img/hero-tech-1.svg' alt="" />*/}
                            </div>
                            <p>Countless Layout</p>
                        </div>
                        <div className="hero__technologies--card">
                            <div className="image-container image-container--2">
                                <img src={tech2} alt="" />
                                {/*<img src='../../img/hero-tech-2.svg' alt="" />*/}
                            </div>
                            <p>Easy to customize</p>
                        </div>
                        <div className="hero__technologies--card">
                            <div className="image-container image-container--3">
                                <img src={tech3} alt="" />
                                {/*<img src='../../img/hero-tech-3.svg' alt="" />*/}
                            </div>
                            <p>Live customizer</p>
                        </div>
                        <div className="hero__technologies--card">
                            <div className="image-container image-container--4">
                                <img src={tech4} alt="" />
                                {/*<img src='../../img/hero-tech-4.svg' alt="" />*/}
                            </div>
                            <p>Fully responsive</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;