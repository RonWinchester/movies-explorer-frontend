import React from "react";
import NoFilms from "../NoFilms/NoFilms";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies(props) {
  const { cards } = props;

  return (
    <main className="alignment">
      <SearchForm></SearchForm>
      {cards ? <MoviesCardList cards={cards}></MoviesCardList> : <NoFilms title='Нет загруженных фильмов'/>}
    </main>
  );
}

export default Movies;
