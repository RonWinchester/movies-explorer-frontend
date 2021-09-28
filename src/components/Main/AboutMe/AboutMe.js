import React from "react";
import avatar from "../../../images/avatar.png";
import BlockName from "../BlockName/BlockName";
import { portfolioUrls } from "../../../constants/constants";
import Porfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <div className="alignment about-me">
      <BlockName name="Студент" id="about-me" />
      <div className="about-me-block">
        <div className="about-me-information">
          <h3 className="about-me-information__title">Виталий</h3>
          <h4 className="about-me-information__subtitle">
            Фронтенд-разработчик, 30 лет
          </h4>
          <p className="about-me-information__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me-information__pages">
            <li className="about-me-information__page">
              <a
                className="link"
                href="https://www.facebook.com/roma.polugrudov/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="link about-me-information__page">
              <a
                className="link"
                href="https://github.com/RonWinchester"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <div className="about-me-avatar">
          <img className="about-me-avatar__image" src={avatar} alt="аватар" />
        </div>
      </div>
      <div>
        <Porfolio elements={portfolioUrls}></Porfolio>
      </div>
    </div>
  );
}
export default AboutMe;
