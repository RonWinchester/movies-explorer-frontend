import React from "react";

function MoviesCard(props) {
  const { image, title, time, like } = props;
  return <li className="movies-card">
      <img alt={title} src={image} className='movies-card__image'/>
      <div className='movies-card__description'>
          <h2 className='movies-card__title'>{title}</h2>
          <button className={`movies-card__button ${like && 'movies-card__button_active'} `} type="button" /* onClick={handleLikeClick} */></button>
          <p className='movies-card__time'>{time}</p>
      </div>
  </li>;
}

export default MoviesCard;
