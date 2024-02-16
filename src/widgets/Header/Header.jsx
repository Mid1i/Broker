import classNames from "classnames";
import {useState} from "react";

import Logo from "shared/assets/icons/Logo";

import "./Header.styles.scss";


export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);


    return (
        <header className="header">
            <div className="header__inner">
                <Logo className="header__logo logo"/>
                <nav className="header__nav">
                    <ul className="header__menu">
                        <span className="header__menu-el">Главная</span>
                        <span className="header__menu-el">Недвижимость</span>
                        <span className="header__menu-el">Информация</span>
                    </ul>
                </nav>
                <div className="header__auth">
                    <button className="header__registration">Регистрация</button>
                    <button className="header__login">Вход</button>
                </div>
                <div className={classNames("header__burger", openMenu && "active")} onClick={() => setOpenMenu(prev => !prev)}>
                    <span className="header__burger-line"></span>
                </div>
            </div>
            <div className={classNames("header__popup", openMenu && "active")}>
                <nav className="header__nav header__nav--popup">
                    <ul className="header__menu">
                        <span className="header__menu-el">Главная</span>
                        <span className="header__menu-el">Недвижимость</span>
                        <span className="header__menu-el">Информация</span>
                    </ul>
                </nav>
                <div className="header__auth header__auth--popup">
                    <button className="header__registration">Регистрация</button>
                    <button className="header__login">Вход</button>
                </div>
            </div>
        </header>
    );
}