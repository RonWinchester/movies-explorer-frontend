import React from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import { cards } from "../../constants/constants";

function SavedMovies() {
  // Переделал массив, чтобы просто отличались страницы
  const newCards = cards.filter((args,index) => index > 8);
  return (
    <main className="alignment">
      <SearchForm></SearchForm>
      <MoviesCardList cards={newCards}></MoviesCardList>
    </main>
  );
}

export default SavedMovies;
