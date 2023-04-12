import React from "react";

import './products.scss';
import uniqueImg from '../../img/about-unique.jpg';
import products from '../../img/products.jpg';

const Products = () => {
    return (
        <>
            <div className="wrapper wrapper-about padding-add-medium">
                <div className="about-container padding-add-small" id="people">
                    <h2>Be unique</h2>
                    <p className='heading-p'>people really matter</p>
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
                <div className="img-container-unique">
                    <img src={uniqueImg} alt="" />
                    {/*<img src='../../img/about-unique.jpg' alt="" />*/}
                </div>
            </div>
            <div className="wrapper wrapper-about padding-add-medium">
                <div className="img-container-about">
                    <img src={products} alt="" />
                    {/*<img src='../../img/products.jpg' alt="" />*/}
                </div>
                <div className="about-container padding-add-small" id="products">
                    <h2>Products</h2>
                    <p className='heading-p'>latest features</p>
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
        </>
    )
}

export default Products;