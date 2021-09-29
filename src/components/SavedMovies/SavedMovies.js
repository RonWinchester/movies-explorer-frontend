import React from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import NoFilms from "../NoFilms/NoFilms";

function SavedMovies(props) {
    const { cards } = props;
  // Переделал массив, чтобы просто отличались страницы
  let newCards;
  if (cards) {
    newCards = cards.filter((args, index) => index > 8);
  }
  return (
    <main className="alignment">
      <SearchForm></SearchForm>
      {cards ? (
        <MoviesCardList cards={newCards}></MoviesCardList>
      ) : (
        <NoFilms title='Нет сохраненных фильмов'/>
      )}
    </main>
  );
}

export default SavedMovies;
