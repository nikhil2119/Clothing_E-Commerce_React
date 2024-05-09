import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NavBarMain from './MainNavbar';
import "./style.css";

import EndInfo from './EndInfo';

import Welcomepage from './Welcome_Page_Sections/WelcomePageHome';
import ProductSection from './StockScroll/ProductSection';
import CollectionContainer from './Collection_Container/CollectionContainer';

import WelcomepageWoman from './Welcome_Page_Sections/WelcomePageWoman';
import ProductSectionwoman from './StockScroll/ProductSectionwoman';
import CollectionContainerwoman from './Collection_Container/CollectionContainerWoman';

import WelcomepageMan from './Welcome_Page_Sections/WelcomePageMan';
import ProductSectionman from './StockScroll/ProductSectionman';
import CollectionContainerman from './Collection_Container/CollectionContainerMan';

import Welcomepagekids from './Welcome_Page_Sections/WelcomePageKids';
import ProductSectionkid from './StockScroll/ProductSectionkids';
import CollectionContainerkid from './Collection_Container/CollectionContainerkid';

import WelcomePageAccessories from './Welcome_Page_Sections/WecomePageAccessories';
import ProductSectionAcc from './StockScroll/ProductSectionAccessories';
import CollectionContaineracc from './Collection_Container/CollectionContaineracc';

function NavBar() {
    return (
        <Router>
            <NavBarMain/>
            <Routes>
                <Route path='/' element={<><Welcomepage /><ProductSection /><CollectionContainer /><EndInfo/></>} />
                <Route path='/woman' element={<><WelcomepageWoman/><ProductSectionwoman/><CollectionContainerwoman/><EndInfo/></>} />
                <Route path='/man' element={<><WelcomepageMan/><ProductSectionman/><CollectionContainerman/><EndInfo/></>} />
                <Route path='/kid' element={<><Welcomepagekids/><ProductSectionkid/><CollectionContainerkid/><EndInfo/></>}/>
                <Route path='/accessories' element={<><WelcomePageAccessories/><ProductSectionAcc/><CollectionContaineracc/><EndInfo/></>} />
            </Routes>
        </Router>
    );
}

export default NavBar;
