import React from "react";
import NavTab from "../NavTab/NavTab";
import { techsButton } from "../../../constants/constants";

function Techs() {
  return (
    <div className="techs">
      <h2 className="border-bottom techs__title" id="stack">
        Технологии
      </h2>
      <div className="techs-information">
        <h3 className="techs-information__title">7 технологий</h3>
        <p className='techs-information__description'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        {<NavTab elements={techsButton} navTab='navTab_techs' navTab__item='navTab__item_techs'></NavTab>}
      </div>
    </div>
  );
}

export default Techs;
