import React from "react";
import { Link } from "react-router-dom";

function Navigation({ isOpen, onClose }) {
  return (
    <nav className={isOpen ? "navigation navigation_isopen" : "navigation"}>
      <Link
        onClick={isOpen ? onClose : undefined}
        to="/movies"
        className={`link link__navigation ${
          isOpen ? "link__navigation_menue link__navigation_bottom" : ""
        }`}
      >
        Фильмы
      </Link>
      <Link
        onClick={isOpen ? onClose : undefined}
        to="/saved-movies"
        className={`link link__navigation link__navigation_save-films ${
          isOpen ? "link__navigation_menue" : ""
        }`}
      >
        Сохранённые фильмы
      </Link>
    </nav>
  );
}

export default Navigation;
