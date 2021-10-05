import React from "react";

function NavTab(props) {
  return (
    <ul className={`navTab ${props.navTab}`}>
      {props.elements.map((element, index) => (
        <li className={`navTab__item ${props.navTab__item}`} key={index}>
          <a href={element.link} className="link" target={element.target} rel="noreferrer" >
            {element.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTab;
