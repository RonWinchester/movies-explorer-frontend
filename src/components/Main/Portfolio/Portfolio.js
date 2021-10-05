import React from "react";
import arrow from '../../../images/arrow.svg'

function Porfolio(props) {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className='portfolio__elements'>
        {props.elements.map((element, index) => (
          <li className={`portfolio__element ${index > 0 ? 'portfolio__element_border' : ''}`} key={index}>
            <a
              href={element.link}
              className="link portfolio__link"
              target={element.target}
              rel="noreferrer"
            >
              {element.name}
            </a>
            <img className='portfolio__arrow' src={arrow} alt='стрелочка'/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Porfolio;
