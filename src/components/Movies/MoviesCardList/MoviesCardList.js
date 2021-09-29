import React from "react";
import MoreButton from "../../MoreButton/MoreButton";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const { cards } = props;
  return (
    <>
      <ul className="movies">
        {cards.map((card, index) => (
          <MoviesCard
            key={index}
            image={card.image}
            title={card.title}
            time={card.time}
            like={card.like}
          />
        ))}
      </ul>
      {cards.length > 9 && <MoreButton></MoreButton>}
    </>
  );
}

export default MoviesCardList;
