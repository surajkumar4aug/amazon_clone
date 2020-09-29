import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/">
            <img className="headerlogo" src="http://www.clickbank.com/wp-content/uploads/2016/05/amazon_logo.png"></img>
            </Link>
            <div className="headersearch">
                <input type="text" className="headerinput"/>
                <SearchIcon className="headersearchicon"/>
            <div className="headernav">
                <Link to="/Login">
                <div className="headeroption">
                    <span className="headeroptionline1">hello</span>
                    <span className="headeroptionline2">Sign in</span>
                    </div>
                    </Link>
            </div>        
            
                <div className="headeroption">
                    <span className="headeroptionline1">return</span>
                    <span className="headeroptionline2">order</span>
                    </div>
        
            
            <div className="headeroption">
            <span className="headeroptionline1">your</span>
            <span className="headeroptionline2">prime</span>
            </div>
            <Link to="/checkout">
            <div className="headerbasket">

                <ShoppingBasketIcon/>
                <span className="headeroptionbasket headeroptionline2">{basket?.length}</span>
            </div>
            </Link>
        </div>    
        </div>
    )
}

export default Header;
