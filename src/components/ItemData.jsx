import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NavBarMain from './MainNavbar';
import Review from './Review';
import demoimg from "./Images/man_sitting.avif";


function ItemData(props) {
    const { imgSrc, companyName, productName, price } = props; // Destructure props to get product data

    return (
        <>
            <Router>
                <NavBarMain />
            </Router>
            <div className='item-page-container'>
                <div className='img-container'>
                    <img className='demoimgClass' src={demoimg} alt="" />
                </div>
                <div className='item-info'>
                    <h1 className='item-company-name'>{companyName}</h1>
                    <h3 className='item-name-description'>{productName}</h3>    
                    <h1>{price}</h1>

                    <h2 className='select-size-title'>SELECT SIZE</h2>
                    <ul className='select-size'>
                        <li className='select-size-item'>S</li>
                        <li className='select-size-item'>M</li>
                        <li className='select-size-item'>L</li>
                        <li className='select-size-item'>XL</li>
                        <li className='select-size-item'>2XL</li>
                        <li className='select-size-item'>3XL</li>
                    </ul>

                    <div className='add-to'>
                        <button className='add-to-bag'>ADD TO BAG</button>
                        <button className='add-to-wishlist'>WISHLIST</button>
                    </div>
                    <div className="checkCod mt-2 w100 pull-left" bis_skin_checked="1">
                        <div className="checkCodBox false" bis_skin_checked="1">
                            <div className="checkPincodeBox" bis_skin_checked="1">
                                <div className="checkPincodeHeader d-flex align-items-center" bis_skin_checked="1">
                                    <img src="https://images.bewakoof.com/web/ic-location.svg" alt="location_icon" loading="lazy"/>
                                    CHECK FOR DELIVERY DETAILS
                                </div>
                                <div className="deliveryLocation" bis_skin_checked="1">
                                    <a className="pull-left">
                                        <div className="deliveryLocation d-flex flex-row justify-content-start align-items-center" bis_skin_checked="1">
                                            <p>Delivering all across</p>
                                            <p className="countryName"> India</p>
                                        </div>
                                    </a>
                                    <img src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" loading="lazy" decoding="async" className='indiaFlag'/>
                                </div>
                                <div className="codCheckForm mb-3 codError false" bis_skin_checked="1">
                                    <input className="LocationCheckerInput" type="text" placeholder="Enter Pincode" maxLength="6" name="codCheck" value="" />
                                    <button className='locationCheckerBox'>CHECK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Review/>
        </>
    );
}

export default ItemData;


