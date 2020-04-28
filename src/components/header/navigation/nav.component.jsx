import React from 'react';
import './nav.styles.css';

import { NavLink } from 'react-router-dom';

const Nav = ({route, title}) => (
    <NavLink exact className='navlink'  to={route}>{title}</NavLink>
)

export default Nav;