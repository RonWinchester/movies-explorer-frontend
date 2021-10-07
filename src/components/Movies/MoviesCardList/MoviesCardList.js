import React from "react";
import Button from "../../Button/Button";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const { cards, handleLikeClick, like, uploadingСards, hiddenButton } = props;
  return (
    <>
      <ul className="movies">
        {cards.map((card, index) => (
          <MoviesCard
            key={card.id}
            image={`https://api.nomoreparties.co${card.image.url}`}
            title={card.nameRU}
            time={card.duration}
            like={like}
            link={card.trailerLink}
            handleLikeClick={handleLikeClick}
            card={card}
          />
        ))}
      </ul>
      {!hiddenButton && (
        <Button
          selector="button_more"
          name="Еще"
          type="button"
          handleClick={uploadingСards}
        ></Button>
      )}
    </>
  );
}

export default MoviesCardList;
