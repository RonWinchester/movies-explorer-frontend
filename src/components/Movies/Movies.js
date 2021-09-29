import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import { cards } from "../../constants/constants";

function Movies(props) {
  return (
    <main className="alignment">
      <SearchForm></SearchForm>
      <MoviesCardList cards={cards}></MoviesCardList>
    </main>
  );
}

export default Movies;
