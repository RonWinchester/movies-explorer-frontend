import React from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import NoFilms from "../NoFilms/NoFilms";

function SavedMovies(props) {
  const { cards, handleLikeClick, saveMoviePage, handleRequest, shortFilms, notShortFilms } = props;

  return (
    <main className="alignment">
      <SearchForm handleRequest={handleRequest} shortFilms={shortFilms} notShortFilms={notShortFilms}></SearchForm>
      {cards.length > 0 ? (
        <MoviesCardList
          saveMoviePage={saveMoviePage}
          handleLikeClick={handleLikeClick}
          cards={cards}
        ></MoviesCardList>
      ) : (
        <NoFilms title={cards? "Ничего не найдено" : 'Нет сохраненных фильмов'} />
      )}
    </main>
  );
}

export default SavedMovies;
