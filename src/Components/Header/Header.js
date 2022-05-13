import React from 'react';
import '../style/header/Header.scss'
import {NavLink, Link} from "react-router-dom";
import logo from '../../images/logo.svg'

const Header = () => {
    return (
      <header>
<div className="logo">
    <Link><img src={logo} alt=""/></Link>
</div>
<div className="menu-right">




</div>
      </header>
    );
};

export default Header;