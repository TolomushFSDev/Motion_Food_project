import React from 'react';
import '../style/header/Header.scss'
import {NavLink, Link} from "react-router-dom";
import logo from '../../images/logo.svg'
import signup from '../../images/signup.svg'
import basket from '../../images/basket.svg'

const Header = () => {
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="header">
                        <div className="header__logo">
                            <Link to="/"><img src={logo} alt=""/></Link>
                        </div>
                        <div className="header__all">
                            <div className="header__all__navs">
                                <NavLink to="/">Меню</NavLink>
                                <NavLink to="/stock">Акции</NavLink>
                                <NavLink to="/aboutUs">О нас</NavLink>
                                <NavLink to="/contacts">Контакты</NavLink>
                            </div>
                            <div className="header__all__settings">
                                <div className="header__all__settings__details">
                                    <h1 className="header__all__settings__details__languages">RU</h1>
                                    <NavLink to="/"><img src={signup} alt="#signup" className="header__all__settings__details__signup"/></NavLink>
                                    <NavLink to="/"><img src={basket} alt="#basket" className="header__all__settings__details__basket"/></NavLink>
                                </div>
                            </div>
                            <div className="header__all__settings__details__search">
                                <input type="search" className="header__all__settings__details__search__input" placeholder="Поиск еды, десерты и т. д."/>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;