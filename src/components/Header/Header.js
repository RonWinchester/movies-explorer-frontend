import React from "react";
import logo from "../../images/logo.svg";
import { Link, useHistory } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import BurgerButton from "./BurgerButton/BurgerButton";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ loggedIn }) {
  const history = useHistory();
  const [isOpen, setIsOpen] = React.useState(false);

  function handleMenueOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  return (
    <header className="alignment header">
      <Link to="/">
        <img src={logo} alt="логотип" className="header__logo"></img>
      </Link>
      {loggedIn ? (
        <>
          <Navigation></Navigation>
          <Link
            to="/profile"
            className="link link__header link__header_profile"
          >
            Аккаунт
            <div className="header__logo-profile"></div>
          </Link>
          <BurgerButton onClick={handleMenueOpen}></BurgerButton>
          <BurgerMenu isOpen={isOpen} onClose={handleMenueOpen}></BurgerMenu>
        </>
      ) : (
        <div className="header__navigation">
          <Link to="/signup" className="link link__header link__header_signup">
            Регистрация
          </Link>
          <button
            className="button button__header"
            onClick={() => history.push("/signin")}
          >
            Войти
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
