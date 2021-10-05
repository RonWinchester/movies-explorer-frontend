import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";


function BurgerMenu({ isOpen, onClose }) {
  return (
    <div className={isOpen ? "popup popup_opened" : "popup"}>
      <div className='popup-container'>
        <button
          className="popup__close-button"
          type="button" onClick={onClose}
        />
        <Link to='/' className='link link__navigation_menue' onClick={onClose}>Главная</Link>
        <Navigation isOpen={isOpen} onClose={onClose}></Navigation>
        <Link
            to="/profile"
            className="link link__navigation_menue link__navigation_margin"
            onClick={onClose}
          >
            Аккаунт
            <div className="header__logo-profile"></div>
          </Link>
      </div>
    </div>
  );
}

export default BurgerMenu;
