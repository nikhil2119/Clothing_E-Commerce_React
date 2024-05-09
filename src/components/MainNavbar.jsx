import DarkLogo from "./Images/dark-logo.png";
import UserLogo from "./Images/user.png";
import CartLogo from "./Images/cart.png";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function NavBarMain() {
    return (


        <nav className="navbar">
            <div className="nav">
                <img src={DarkLogo} className="brand-logo" alt="" />
                <div className="nav-items">
                    <div className="search">
                        <input type="text" className="search-box" placeholder="search brand, product" />
                        <button className="search-btn">search</button>
                    </div>
                    <Link to="#"><img src={UserLogo} alt="" /></Link>
                    <Link to="#"><img src={CartLogo} alt="" /></Link>
                </div>
            </div>
            <ul className="links-container">
                <li className="link-item"><Link to='/' className='link'>Home</Link></li>
                <li className="link-item"><Link to='/woman' className='link'>Woman</Link></li>
                <li className="link-item"><Link to='/man' className='link'>Man</Link></li>
                <li className="link-item"><Link to='/kid' className='link'>Kid</Link></li>
                <li className="link-item"><Link to='/accessories' className='link'>Accessories</Link></li>
            </ul>
        </nav>
    );
}

export default NavBarMain;