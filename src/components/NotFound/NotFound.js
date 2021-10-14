import React from "react";
import { useHistory, } from "react-router-dom";

function NotFound({loggedIn}) {
  const history = useHistory();
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__description">Страница не найдена</p>
      <p onClick={() => loggedIn ? history.goBack(): history.push('/')} className="link not-found__link">
        Назад
      </p>
    </div>
  );
}

export default NotFound;
