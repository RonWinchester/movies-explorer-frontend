import React from "react";
import arrow from '../../../images/arrow.svg'

function Porfolio(props) {
  return (
    <div className="Portfolio">
      <h3 className="Portfolio__title">Портфолио</h3>
      <ul className='Portfolio__elements'>
        {props.elements.map((element, index) => (
          <li className={`Portfolio__element ${index > 0 ? 'Portfolio__element_border' : ''}`} key={index}>
            <a
              href={element.link}
              className="link Portfolio__link"
              target={element.target}
              rel="noreferrer"
            >
              {element.name}
            </a>
            <img className='Portfolio__arrow' src={arrow} alt='стрелочка'/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Porfolio;
