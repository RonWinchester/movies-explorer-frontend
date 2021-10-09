import React from "react";
import "./App.css";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
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
import { dependentValues } from "../../hooks/resizeWindows";
import {
  createUser,
  login,
  logout,
  getUserInfo,
  patchUserInfo,
} from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  //Отфильтрованные фильмы по названию
  const [movies, setMovies] = React.useState([]);
  //Записываем данные пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  //Отфильтрованные фильмы по количеству карточек для разных экранов
  const [movieCards, setMovieCards] = React.useState([]);
  //Прелоадер
  const [requestProcessing, setRequestProcessing] = React.useState(false);

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
  const history = useHistory();

  //Подтягиваем данные
  React.useEffect(() => {
    getUserInfo()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`ошибка авторизации ${err}`);
      });
  }, [loggedIn, history]);

  //Регистрация
  function registration(name, email, password) {
    createUser({ name, email, password })
      .then((res) => {
        history.push("/signin");
      })
      .catch((err) => {
        console.log(`ошибка регистрации ${err}`);
      });
  }

  //Авторизация
  function authorize(email, password) {
    login({ email, password })
      .then((res) => {
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(`ошибка регистрации ${err}`);
      });
  }

  //Выход
  function exit() {
    logout()
      .then((res) => {
        setLoggedIn(false);
        localStorage.removeItem("movies");
        history.push("/");
      })
      .catch((err) => {
        console.log(`ошибка регистрации ${err}`);
      });
  }

  //Редактирование профиля
  function editProfile(name, email) {
    patchUserInfo({ name, email })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`ошибка регистрации ${err}`);
      });
  }

  //Запрос на фильмы
  const handleRequest = (query) => {
    setRequestProcessing(true);
    getMovies()
      .then((response) => {
        /* setMovies(response); */
        const filterFilms = filterMovies(response, query);
        localStorage.setItem("movies", JSON.stringify(filterFilms));
        setMovies(filterFilms);
        setRequestProcessing(false);
      })
      .catch((err) => {
        console.log(`Ошибка при загрузке карточек: ${err}`);
        setRequestProcessing(false);
        setFilmsError(true);
      });
  };

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
  function handleLikeClick(cardLike) {
    setLike(true);
    movieCards.map((card) =>
      card.id === cardLike.id
        ? (card["like"] = cardLike.like ? false : true)
        : card
    );
  }

  React.useEffect(() => {
    setMovieCards(movieCards);
    setLike(false);
  }, [like, movieCards]);

  return (
    <div className="page__container">
      <CurrentUserContext.Provider value={currentUser}>
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
            exit={exit}
            editProfile={editProfile}
          />
          <Route path="/signin">
            <Login authorize={authorize} />
          </Route>
          <Route path="/signup">
            <Register registration={registration} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
