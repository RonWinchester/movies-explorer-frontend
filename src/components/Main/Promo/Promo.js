import React from "react";
import NavTab from "../NavTab/NavTab";
import { promoButton } from "../../../constants/constants";

function Promo() {
  return (
    <div className="wrapper promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <NavTab elements={promoButton} navTab = 'navTab_promo' navTab__item='navTab__item_promo'></NavTab>
    </div>
  );
}

export default Promo;
