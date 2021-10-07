import React from "react";
import NoFilms from "../NoFilms/NoFilms";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";

function Movies(props) {
  const {
    movies,
    handleRequest,
    handleLikeClick,
    like,
    filmsError,
    uploadingСards,
    hiddenButton,
  } = props;

  return (
    <main className="alignment">
      <SearchForm handleRequest={handleRequest}></SearchForm>
      {props.requestProcessing ? (
        <Preloader />
      ) : (
        <>
          {movies.length > 0 ? (
            <MoviesCardList
              cards={movies}
              handleLikeClick={handleLikeClick}
              like={like}
              uploadingСards={uploadingСards}
              hiddenButton={hiddenButton}
            ></MoviesCardList>
          ) : (
            <NoFilms
              title={`${
                filmsError
                  ? "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
                  : "Ничего не найдено"
              }`}
            />
          )}
        </>
      )}
    </main>
  );
}

export default Movies;
