import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { getMovies } from "../../utils/MoviesApi";
import { filterMovies } from "../../utils/filter";
import { dependentValues } from "../hooks/resizeWindows";

import {
  LARGE_SCREEN,
  MEDIUM_SCREEN,
  MAX_MOVIES,
  MID_MOVIES,
  MIN_MOVIES,
  ADD_MAX_MOVIES,
  ADD_MID_MOVIES,
  ADD_MIN_MOVIES,
} from "../../constants/constants";

function App() {
  //Авторизация
  const [loggedIn, setLoggedIn] = React.useState(true);
  //Отфильтрованные фильмы по названию
  const [movies, setMovies] = React.useState([]);
  //Отфильтрованные фильмы по количеству карточек для разных экранов
  const [movieCards, setMovieCards] = React.useState([]);
  //Прелоадер
  const [requestProcessing, setRequestProcessing] = React.useState(false);
  // Лайк
  const [like, setLike] = React.useState(false);
  //Ошибка при загрузке фильмов
  const [filmsError, setFilmsError] = React.useState(false);

  //Переменные для фильтрации фильмов по размеру экрана и подгрузке по клику
  const [filmsNumber, setFilmsNumber] = React.useState(null);
  const [downloadableMovies, setDownloadableMovies] = React.useState(null);
  const [currentCount, setCurrenCount] = React.useState(0);

  //Спрятать кнопку
  const [hiddenButton, sethiddenButton] = React.useState(true);

  const location = useLocation();

  //Запрос на фильмы
  const handleRequest = (query) => {
    setRequestProcessing(true);
    getMovies()
      .then((response) => {
        /* setErrorResponce(response.Response); */
        /* setMovies(response); */
        const filterFilms = filterMovies(response, query);
        localStorage.setItem("movies", JSON.stringify(filterFilms));
        //localStorage.setItem("query", JSON.stringify(query));
        setMovies(filterFilms);
        setRequestProcessing(false);
      })
      .catch((err) => {
        console.log(`Ошибка при загрузке карточек: ${err}`);
        setRequestProcessing(false);
        setFilmsError(true);
      });
  };

  /*   function dependentValues(sizeWindow) {
    if (sizeWindow >= LARGE_SCREEN) {
      setFilmsNumber(MAX_MOVIES);
      setDownloadableMovies(ADD_MAX_MOVIES);
    } else if (sizeWindow < LARGE_SCREEN && sizeWindow >= MEDIUM_SCREEN) {
      setFilmsNumber(MID_MOVIES);
      setDownloadableMovies(ADD_MID_MOVIES);
    } else if (sizeWindow < MEDIUM_SCREEN) {
      setFilmsNumber(MIN_MOVIES);
      setDownloadableMovies(ADD_MIN_MOVIES);
    }
  } */

  //Измеряем ресайз окна
  function handleResize() {
    const windowSize = window.innerWidth;
    dependentValues(windowSize, setFilmsNumber, setDownloadableMovies);
  }

  //Монтирование фильмов из локального хранилища
  React.useEffect(() => {
    const movieSearch = JSON.parse(localStorage.getItem("movies"));
    //querySearch = JSON.parse(localStorage.getItem("query"));
    movieSearch !== null ? setMovies(movieSearch) : setMovies([]);
    handleResize();
  }, [loggedIn, location.pathname]);

  //Слушаем ресайз окна
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Подгружаем карточки для разных окон
  React.useEffect(() => {
    setMovieCards(movies.slice(0, filmsNumber));
    setCurrenCount(filmsNumber);
  }, [movies, filmsNumber]);

  //Прячем кнопку "еще"
  React.useEffect(() => {
    movies.length > movieCards.length
      ? sethiddenButton(false)
      : sethiddenButton(true);
  }, [movies, movieCards]);

  //Загрузка карточек по кнопке
  function uploadingСards() {
    if (movies.length > movieCards.length) {
      const count = currentCount + downloadableMovies;
      const additionalCards = movies.slice(currentCount, count);
      setMovieCards([...movieCards, ...additionalCards]);
      setCurrenCount(count);
    }
  }

  //Переключатель лайка
  const handleLikeClick = () => {
    setLike(true);
    console.log("true");
  };

  return (
    <div className="page__container">
      <Switch>
        <Route exact path="/">
          <Header loggedIn={loggedIn}></Header>
          <Main></Main>
          <Footer></Footer>
        </Route>
        <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
          movies={movieCards}
          requestProcessing={requestProcessing}
          handleRequest={handleRequest}
          like={like}
          handleLikeClick={handleLikeClick}
          filmsError={filmsError}
          uploadingСards={uploadingСards}
          hiddenButton={hiddenButton}
        />
        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          cards={movies}
        />
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
          noFooter={true}
        />
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
