import React from "react";
import avatar from "../../../images/avatar.jpg";
import BlockName from "../BlockName/BlockName";
import { portfolioUrls } from "../../../constants/constants";
import Porfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <div className="alignment about-me">
      <BlockName name="Студент" id="about-me" />
      <div className="about-me-block">
        <div className="about-me-information">
          <h3 className="about-me-information__title">Роман</h3>
          <h4 className="about-me-information__subtitle">
            Junior JavaScript Full-Stack developer, 25 лет
          </h4>
          <p className="about-me-information__description">
            Осознанно пришел к разработке. В профессии больше всего привлекает
            возможность видеть результат работы и вносить вклад в действительно
            важные проекты. Развиваюсь как full-stack разработчик.
            Самостоятельно изучаю новые технологии. Люблю читать не только
            документацию, но и книги (серия "Вы не знаете JS"). Нравится изучать
            алгоритмы (Базовые знания получил из книги "Грокаем алгоритмы").
            <br/>
            <br/>
            Участвую в PET-проектах с командной разработкой, в которых осваиваю
            TypeScript, Next.js - под присмотром менторов. Умею хорошо
            декомпозировать задачи. Люблю функциональный подход. Есть опыт в
            публичных выступлениях - проводил лекции по Вирусологии, выступал с
            докладами на учебных конференциях. Участвовал в переговорах с
            заказчиками - предлагал свои идеи по продвижению и внедрению новой
            функциональности, благодаря чему посещаемость проекта выросла на
            40%. Проходил стажировку по обучению React Native в компании Kode.<br/>
            <br/> Дополнительно: Имею высшее биологическое образование. Мое
            хобби, не связанное с программированием, это:
            нейрофизиология,изучение поведения людей и критическое мышление.
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
