import React from 'react';
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__container">
        <Link className="logo" to="/">
          <div className="logo__image logo__image_small logo__image_monocolor"></div>
          <span className="logo__text logo__text_small">АС Квадрат</span>
        </Link>
        <a className="footer__phone" href="tel:+79114447755">+7 (911) 444 77 55</a>
        <a className="footer__email" href="mailto:as-kvadrat@gmail.com">as-kvadrat@gmail.com</a>
        <span className="footer__address">Калининград, Россия</span>
      </div>
    </footer>
  )
}

export default Footer;