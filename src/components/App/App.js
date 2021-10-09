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
import {
  filterMovies,
  handleIdFilter,
  handleFilter,
  handleShortMovies,
} from "../../utils/filter";
import { dependentValues } from "../../hooks/resizeWindows";
import {
  createUser,
  login,
  logout,
  getUserInfo,
  patchUserInfo,
  savedMovies,
  getSaveMovies,
  deleteSavedMovie,
} from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  //Отфильтрованные фильмы по названию
  const [movies, setMovies] = React.useState([]);
  //Сохраненные фильмы пользователя
  const [saveFilms, setSaveFilms] = React.useState([]);
  //Записываем данные пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  //Отфильтрованные фильмы по количеству карточек для разных экранов
  const [movieCards, setMovieCards] = React.useState([]);
  //Прелоадер
  const [requestProcessing, setRequestProcessing] = React.useState(false);

  const [saveMoviePage, setSaveMoviePage] = React.useState(false);

  const [savedFilmsId, setSavedFilmsId] = React.useState([]);
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
    getSaveMovies()
      .then((res) => {
        localStorage.setItem("savedMovies", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(`ошибка загрузки сохраненных фильмов ${err}`);
      });

    getUserInfo()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`ошибка авторизации ${err}`);
      });
  }, [loggedIn, location]);

  React.useEffect(() => {
    history.location.pathname === "/saved-movies"
      ? setSaveMoviePage(true)
      : setSaveMoviePage(false);
  }, [history.location.pathname]);

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
        localStorage.removeItem("savedMovies");
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
    movieSearch !== null ? setMovies(movieSearch) : setMovies([]);
    const saveMovieSearch = JSON.parse(localStorage.getItem("savedMovies"));
    saveMovieSearch !== null ? setSaveFilms(saveMovieSearch) : setMovies([]);
    handleResize();
  }, [loggedIn, location]);

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
  /*   function handleLikeClick(cardLike) {
    setLike(true);
    movieCards.map((card) =>
      card.id === cardLike.id
        ? (card["like"] = cardLike.like ? false : true)
        : card
    );
  } */

  //Удаление фильма
  function deleteMovie(cardLike) {
    saveFilms.map((card) => {
      if (card.movieId === cardLike.movieId) {
        deleteSavedMovie(cardLike._id)
          .then((res) => {
            setSaveFilms(handleIdFilter(saveFilms, cardLike._id));
            localStorage.setItem("savedMovies", JSON.stringify(saveFilms));
          })
          .catch((err) => {
            console.log(`ошибка регистрации ${err}`);
          });
      }
    });
  }

  //Переключатель лайка и сохранение фильмов
  function handleLikeClick(cardLike) {
    if (history.location.pathname === "/saved-movies") {
      /*       saveFilms.map((card) => {
        if (card.movieId === cardLike.movieId) {
          deleteSavedMovie(cardLike._id)
            .then((res) => {
              setSaveFilms(handleIdFilter(saveFilms, cardLike._id));
              localStorage.setItem("savedMovies", JSON.stringify(saveFilms));
            })
            .catch((err) => {
              console.log(`ошибка регистрации ${err}`);
            });
        }
      }); */
      deleteMovie(cardLike);
    } else {
      savedMovies(cardLike)
        .then((res) => {
          setSaveFilms([...saveFilms, res]);
          localStorage.setItem("savedMovies", JSON.stringify(saveFilms));
          setSavedFilmsId([...savedFilmsId, cardLike.movieId]);
        })
        .catch((err) => {
          console.log(`ошибка регистрации ${err}`);
        });

      // eslint-disable-next-line array-callback-return
      /*       movieCards.map((card) => {
        if (card.id === cardLike.id) {
          savedMovies(cardLike)
            .then((res) => {
              setSaveFilms([...saveFilms, res]);
              localStorage.setItem("savedMovies", JSON.stringify(saveFilms));
            })
            .catch((err) => {
              console.log(`ошибка регистрации ${err}`);
            });
        } else {
          // eslint-disable-next-line no-unused-expressions
          card;
        }
      }); */
    }
  }

  const [shortMovie, setShortMovie] = React.useState([])
  const [shortSaveMovie, setShortSaveMovie] = React.useState([])

  //ищем короткометражки
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function shortFilms () {
    const films = handleShortMovies(movieCards)
    setShortMovie(films)
  }

  function shortSaveFilms () {
    const films = handleShortMovies(saveFilms)
    setShortSaveMovie(films)
  }

  React.useEffect(()=> {
    setMovieCards(shortMovie)
    setSaveFilms(shortSaveMovie)
  },[shortMovie, shortSaveMovie])

  

  //Возвращаем фильмы чекбокс
  function notShortFilms() {
    const movieSearch = JSON.parse(localStorage.getItem("movies"));
    movieSearch !== null ? setMovies(movieSearch) : setMovies([]);
  }

  function notShortSaveFilms() {
    const saveMovieSearch = JSON.parse(localStorage.getItem("savedMovies"));
    saveMovieSearch !== null ? setSaveFilms(saveMovieSearch) : setMovies([]);
  }

  

  //Поиск фильмов
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleFilterSearchMovie(query) {
    setSaveFilms(handleFilter(saveFilms, query));
  }

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
            handleLikeClick={handleLikeClick}
            filmsError={filmsError}
            uploadingСards={uploadingСards}
            hiddenButton={hiddenButton}
            savedFilmsId={savedFilmsId}


            shortFilms={shortFilms}
            notShortFilms={notShortFilms}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            handleLikeClick={handleLikeClick}
            cards={saveFilms}
            saveMoviePage={saveMoviePage}
            handleRequest={handleFilterSearchMovie}

            shortFilms={shortSaveFilms}
            notShortFilms={notShortSaveFilms}
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
