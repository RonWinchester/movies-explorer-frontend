import React from "react";
import Button from "../../Button/Button";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const { cards, handleLikeClick, saveMoviePage, uploadingСards, hiddenButton , savedFilmsId, like} = props;
  return (
    <>
      <ul className="movies">
        {cards.map((card, index) => (
          <MoviesCard
            key={card.id ? card.id : card.movieId}
            image={
              card.image.url
                ? `https://api.nomoreparties.co${card.image.url}`
                : card.image
            }
            title={card.nameRU}
            time={card.duration}
            saveMoviePage={saveMoviePage}
            link={card.trailerLink ? card.trailerLink : card.trailer}
            handleLikeClick={handleLikeClick}
            card={card}

            savedFilmsId={savedFilmsId}
            like={like}
          />
        ))}
      </ul>
      {saveMoviePage ? '' : (!hiddenButton && (
        <Button
          selector="button_more"
          name="Еще"
          type="button"
          handleClick={uploadingСards}
        ></Button>
      ))}
    </>
  );
}

export default MoviesCardList;
