import React from "react";
import NavTab from "../NavTab/NavTab";
import { techsButton } from "../../../constants/constants";
import BlockName from "../BlockName/BlockName";

function Techs() {
  return (
    <div className="techs">
      <BlockName name='Технологии' id='stack' />
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
