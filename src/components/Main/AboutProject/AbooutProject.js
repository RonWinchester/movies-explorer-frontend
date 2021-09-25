import React from "react";

function AboutProject() {
  return (
    <div className="alignment about-project">
      <h2 className="about-project__title border-bottom" id='about'>О проекте</h2>
      <div className="about-project__information">
        <div className="about-project__stages">
          <h3 className="about-project__stages-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__stages-subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__stages">
          <h3 className="about-project__stages-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__stages-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
        <div className="about-project__types">
          <div className="about-project__type">
            <div className="about-project__type-backend">1 неделя</div>
            <div className="about-project__type-frontend">4 недели</div>
          </div>
          <div className="about-project__type">
            <p className="about-project__type-backend about-project__type-description ">
              Back-end
            </p>
            <p className=" about-project__type-frontend about-project__type-description">
              Front-end
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
