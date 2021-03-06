import React from "react";

function Footer() {
  return (
    <footer className="alignment footer">
      <p className="footer__copyright">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__information">
        <p className="footer__date">© {new Date().getFullYear()}</p>
        <ul className="footer__navigation">
          <li className="footer__navigation-item"><a href='https://practicum.yandex.ru'  rel="noreferrer" target='_blank' className='link'>Яндекс.Практикум</a></li>
          <li className="footer__navigation-item"><a href='https://github.com/RonWinchester' rel="noreferrer" target='_blank' className='link'>Github</a></li>
          <li className="footer__navigation-item"><a href='https://www.facebook.com/roma.polugrudov' rel="noreferrer" target='_blank' className='link'>Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
