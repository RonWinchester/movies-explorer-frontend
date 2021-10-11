import React from "react";

function MoviesCard(props) {
  const {
    image,
    title,
    time,
    saveMoviePage,
    link,
    handleLikeClick,
    card,
  } = props;

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return `${hours}ч  ${minutes}мин`;
  }

  function handleLike() {
    handleLikeClick(card);
  }
  const duration = getTimeFromMins(time);
  return (
    <li className="movies-card">
      <img alt={title} src={image} className="movies-card__image" />
      <div className="movies-card__description">
        <h2 className="movies-card__title">
          <a href={link} className="link" target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>
        <button
          className={
            saveMoviePage
              ? `movies-card__button movies-card__button_save`
              : `movies-card__button ${
                card.like && "movies-card__button_active"
                } `
          }
          type="button"
          onClick={handleLike}
        ></button>
        <p className="movies-card__time">{duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
