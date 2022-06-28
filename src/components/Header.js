import React from 'react';
import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="header">
      <div className="header__container">
        <Link className="logo" to="/">
          <div className="logo__image"></div>
          <span className="logo__text">АС Квадрат</span>
        </Link>
        <nav className="header__menu">
          <ul className="header__link-list">
            <li className="header__list-element"><Link className="header__link" to="designed">Проекты</Link></li>
            <li className="header__list-element"><Link className="header__link" to="built">Реализовано</Link></li>
            <li className="header__list-element"><Link className="header__link" to="contacts">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;