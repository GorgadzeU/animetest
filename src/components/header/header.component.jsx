import React from 'react';
import './header.styles.css';

import Nav from './navigation/nav.component';

const Header = () => {
    return (
        <div className='headerContainer'>
            <div>Logo</div>
            <nav>
                <Nav route='/' title='Home'/>
                <Nav route='/all' title='Genres'/>
            </nav>
            <div>Search</div>
        </div>
    )
}

export default Header;