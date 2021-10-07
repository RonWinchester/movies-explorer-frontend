import React from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import NoFilms from "../NoFilms/NoFilms";

function SavedMovies(props) {
    const { cards } = props;
  // Переделал массив, чтобы просто отличались страницы
  return (
    <main className="alignment">
      <SearchForm></SearchForm>
      {cards ? (
        <MoviesCardList cards={cards}></MoviesCardList>
      ) : (
        <NoFilms title='Нет сохраненных фильмов'/>
      )}
    </main>
  );
}

export default SavedMovies;
