import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import BurgerButton from "./BurgerButton/BurgerButton";

function Header({ loggedIn }) {
  return (
    <header className="alignment header">
      <Link to="/">
        <img src={logo} alt="логотип" className="header__logo"></img>
      </Link>
      {!loggedIn ? (
        <>
          <Navigation></Navigation>
          <Link
            to="/profile"
            className="link link__header link__header_profile"
          >
            Аккаунт
            <div className="header__logo-profile"></div>
          </Link>
          <BurgerButton></BurgerButton>
        </>
      ) : (
        <div className="header__navigation">
          <Link to="/signup" className="link link__header link__header_signup">
            Регистрация
          </Link>
          <button className="button button__header">Войти</button>
        </div>
      )}
    </header>
  );
}

export default Header;
