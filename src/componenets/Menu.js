import React, {Fragment} from 'react';
import classes from './Menu.css';

const Menu = () => {

    return (
        <div class="ui">
            <nav class="nav">
                <a href="#">Home</a>
                <a href="#">Sign Up</a>
                <a href="#">Login</a>  
            </nav>

            <div class="filter">
                <a href="#">NFL News</a>
                <a href="#">AFC News</a>
                <a href="#">NFC News</a>
            </div>
        </div>
    )
}

export default Menu;
