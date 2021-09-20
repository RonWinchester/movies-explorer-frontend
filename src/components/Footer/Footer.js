import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__information">
        <p className="footer__date">© {new Date().getFullYear()}</p>
        <ul className="footer__navigation">
            <li className='link footer__navigation-item'>Яндекс.Практикум</li>
            <li className='link footer__navigation-item'>Github</li>
            <li className='link footer__navigation-item'>Facebook</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
