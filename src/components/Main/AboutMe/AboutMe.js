import React from "react";
import avatar from "../../../images/avatar.png";
import BlockName from "../BlockName/BlockName";
import { portfolioUrls } from "../../../constants/constants";
import Porfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <div className="alignment AboutMe">
      <BlockName name="Студент" id="about-me" />
      <div className="AboutMe-block">
        <div className="AboutMe-information">
          <h3 className="AboutMe-information__title">Виталий</h3>
          <h4 className="AboutMe-information__subtitle">
            Фронтенд-разработчик, 30 лет
          </h4>
          <p className="AboutMe-information__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="AboutMe-information__pages">
            <li className="AboutMe-information__page">
              <a
                className="link"
                href="https://www.facebook.com/roma.polugrudov/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="link AboutMe-information__page">
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
        <div className="AboutMe-avatar">
          <img className="AboutMe-avatar__image" src={avatar} alt="аватар" />
        </div>
      </div>
      <div>
        <Porfolio elements={portfolioUrls}></Porfolio>
      </div>
    </div>
  );
}
export default AboutMe;
