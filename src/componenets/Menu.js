import React, {Fragment, useState} from 'react';
import classes from './Menu.css';

const Menu = () => {

    const [filter, setFilter] = useState(false);
    const [nav, setNav] = useState(false);

    const showFilter = (event) => {
        setFilter( prev => !prev);
        console.log("Filter: " + filter);
        if (nav) {
            //show nav
        } else {
            //collapse nav
        }
    }

    const showNav = (event) => {
        setNav( prev => !prev);
        console.log("Nav: " + nav);
        if (filter) {
            //show filter            
        } else {
            //Collapse filter
        }
    }
    return (
        <div className="ui">
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Sign Up</a>
                <a href="#">Login</a>  
                <button onClick={showNav}>COLLAPSE</button>
            </nav>

            <div className="filter">
                <a href="#">NFL News</a>
                <a href="#">AFC News</a>
                <a href="#">NFC News</a>
                <button onClick={showFilter}>COLLAPSE</button>
            </div>
        </div>
    )
}

export default Menu;
