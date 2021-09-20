import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <Link to="/movies" className="link link__navigation">
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className="link link__navigation link__navigation_save-films"
        >
          Сохранённые фильмы
        </Link>
      </nav>
    </>
  );
}

export default Navigation;
