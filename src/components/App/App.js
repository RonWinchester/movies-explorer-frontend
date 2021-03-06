import React from "react";
import "./App.css";
import {
  Route,
  Switch,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
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
import Preloader from "../Movies/Preloader/Preloader";
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

import Popup from "../Popup/Popup";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  //Отфильтрованные фильмы по названию
  const [movies, setMovies] = React.useState([]);
  //Сохраненные фильмы пользователя
  const [saveFilms, setSaveFilms] = React.useState([]);
  //Записываем данные пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  //Отфильтрованные фильмы по количеству карточек для разных экранов
  const [movieCards, setMovieCards] = React.useState([]);
  //Запрос отправлен
  const [requestProcessing, setRequestProcessing] = React.useState(false);

  const [saveMoviePage, setSaveMoviePage] = React.useState(false);

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

  const [popupOpen, setPopupOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const [shortMovie, setShortMovie] = React.useState([]);
  const [shortSaveMovie, setShortSaveMovie] = React.useState([]);
  const [shortMovieToggle, setShortMovieToggle] = React.useState(false);

  const [isCheckingToken, setIsCheckingToken] = React.useState(true);

  //Подтягиваем данные
  React.useEffect(() => {
    getUserInfo()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        setIsCheckingToken(false);
      })
      .catch((err) => {
        console.log(`Ошибка при загрузке данных профиля ${err}`);
        setIsCheckingToken(false);
      });
  }, [loggedIn]);

  React.useEffect(() => {
    getSaveMovies()
      .then((res) => {
        localStorage.setItem("savedMovies", JSON.stringify(res));
        const saveMovieSearch = JSON.parse(localStorage.getItem("savedMovies"));
        saveMovieSearch !== null
          ? setSaveFilms(saveMovieSearch)
          : setSaveFilms([]);

        const movieSearch = JSON.parse(localStorage.getItem("movies"));
        addLikeActive(movieSearch, saveMovieSearch);
      })
      .catch((err) => {
        setSaveFilms([]);
        console.log(`Ошибка при загрузке сохраненных фильмов ${err}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveMoviePage]);

  React.useEffect(() => {
    history.location.pathname === "/saved-movies"
      ? setSaveMoviePage(true)
      : setSaveMoviePage(false);
  }, [history.location.pathname]);

  //Подгрузка лайков
  function addLikeActive(cards, saveFilmsCard) {
    if (
      cards !== null &&
      cards !== undefined &&
      saveFilmsCard !== null &&
      saveFilmsCard !== undefined
    ) {
      const newFilms = cards;
      // eslint-disable-next-line array-callback-return
      newFilms.map((item) => {
        // eslint-disable-next-line array-callback-return
        saveFilmsCard.map((i) => {
          if (item.id === i.movieId) {
            return (item["like"] = true);
          }
        });
      });
      setMovies(newFilms);
      localStorage.setItem("movies", JSON.stringify(newFilms));
    }
    return;
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
        setPopupOpen(true);
        if (err === "401") {
          setMessage(`Неправильная почта или пароль`);
        } else if (err === "400") {
          setMessage(`Ошибка! Введите корректные данные`);
        } else {
          setMessage(`Ошибка при регистрации`);
        }
      });
  }

  //Регистрация
  function registration(name, email, password) {
    createUser({ name, email, password })
      .then((res) => {
        authorize(email, password);
      })
      .catch((err) => {
        console.log(`Ошибка регистрации ${err}`);
        setPopupOpen(true);
        if (err === "409") {
          setMessage(`Ошибка! Пользователь с таким email уже существует`);
        } else if (err === "400") {
          setMessage(`Ошибка! Введите корректные данные`);
        } else {
          setMessage(`Ошибка при регистрации`);
        }
      });
  }

  //Выход
  function exit() {
    logout()
      .then((res) => {
        setLoggedIn(false);
        localStorage.removeItem("movies");
        localStorage.removeItem("savedMovies");
        localStorage.removeItem("shotFilms");
        history.push("/");
      })
      .catch((err) => {
        setPopupOpen(true);
        setMessage("Ошибка при выходе из системы");
        console.log(`Ошибка при выходе из системы ${err}`);
      });
  }

  //Редактирование профиля
  function editProfile(name, email) {
    patchUserInfo({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setMessage("Данные обновлены");
        setPopupOpen(true);
      })
      .catch((err) => {
        setPopupOpen(true);
        console.log(`Ошибка регистрации ${err}`);
        if (err === "400") {
          setMessage(`Ошибка! Введите корректные данные`);
        } else {
          setMessage(`Ошибка при регистрации`);
        }
      });
  }

  //Запрос на фильмы
  const handleRequest = (query) => {
    setRequestProcessing(true);
    getMovies()
      .then((response) => {
        const filterFilms = filterMovies(response, query);
        setRequestProcessing(false);
        addLikeActive(filterFilms, saveFilms);
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

  //Переключаем лайк
  function toggleLike(items, likeFilms, boolean) {
    const elements = [...items];
    elements.map((item) => {
      if (item.id === likeFilms.id || item.id === likeFilms.movieId) {
        return (item["like"] = boolean);
      }
    });
    localStorage.setItem("movies", JSON.stringify(elements));
    if (shortMovieToggle) {
      const movieSearch = JSON.parse(localStorage.getItem("shotFilms"));
      const shortfilmSearch = [...movieSearch];
      shortfilmSearch.map((item) => {
        if (item.id === likeFilms.id || item.id === likeFilms.movieId) {
          return (item["like"] = boolean);
        }
      });
      localStorage.setItem("shotFilms", JSON.stringify(shortfilmSearch));
      setShortMovie(shortfilmSearch);
    } else {
      setMovies(elements);
    }
  }

  //Удаление фильма
  function deleteMovie(cardLike) {
    const saveMovieSearch = JSON.parse(localStorage.getItem("savedMovies"));
    const saveFilmsSearch = [...saveMovieSearch];

    saveFilmsSearch.map((card) => {
      if (card.movieId === cardLike.movieId || card.movieId === cardLike.id) {
        deleteSavedMovie(card._id)
          .then((res) => {
            const newSaveFilms = handleIdFilter(
              saveFilmsSearch,
              cardLike._id || card._id
            );
            setSaveFilms(newSaveFilms);
            localStorage.setItem("savedMovies", JSON.stringify(newSaveFilms));
            toggleLike(movies, cardLike, false);
          })
          .catch((err) => {
            console.log(`Ошибка удаления фильма ${err}`);
            setPopupOpen(true);
            setMessage(`Ошибка при удалении фильма`);
          });
      }
    });
  }

  //Сохранение фильма
  function addSaveMovie(cardLike) {
    savedMovies(cardLike)
      .then((res) => {
        let saveMovieSearch = [];
        if (localStorage.getItem("savedMovies") !== null) {
          saveMovieSearch = JSON.parse(localStorage.getItem("savedMovies"));
        }
        const newSaveMovies = [...saveMovieSearch, res];
        setSaveFilms(newSaveMovies);
        localStorage.setItem("savedMovies", JSON.stringify(newSaveMovies));
        toggleLike(movies, cardLike, true);
      })
      .catch((err) => {
        console.log(`Ошибка при сохранении фильма ${err}`);
        setPopupOpen(true);
        setMessage(`Ошибка при сохранении фильма`);
      });
  }

  //Работа кнопки лайка
  function handleLikeClick(cardLike) {
    if (history.location.pathname === "/saved-movies") {
      deleteMovie(cardLike);
    } else {
      if (cardLike.like) {
        deleteMovie(cardLike);
      } else {
        addSaveMovie(cardLike);
      }
    }
  }

  //ищем короткометражки
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function shortFilms() {
    setShortMovieToggle(true);
    const movieSearch = JSON.parse(localStorage.getItem("movies"));
    const films = handleShortMovies(movieSearch);
    localStorage.setItem("shotFilms", JSON.stringify(films));
    setShortMovie(films);
  }

  function shortSaveFilms() {
    setShortMovieToggle(true);
    const films = handleShortMovies(saveFilms);
    setShortSaveMovie(films);
  }

  React.useEffect(() => {
    setMovieCards(shortMovie);
    setSaveFilms(shortSaveMovie);
  }, [shortMovie, shortSaveMovie]);

  //Возвращаем фильмы чекбокс
  function notShortFilms() {
    setShortMovieToggle(false);
    const movieSearch = JSON.parse(localStorage.getItem("movies"));
    movieSearch !== null ? setMovies(movieSearch) : setMovies([]);
  }

  function notShortSaveFilms() {
    setShortMovieToggle(false);
    const saveMovieSearch = JSON.parse(localStorage.getItem("savedMovies"));
    saveMovieSearch !== null ? setSaveFilms(saveMovieSearch) : setMovies([]);
  }

  React.useEffect(() => {
    setShortMovieToggle(false);
  }, [location]);

  //Поиск фильмов
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleFilterSearchMovie(query) {
    setSaveFilms(handleFilter(saveFilms, query));
  }

  //Popup
  function closeAllPopups() {
    setPopupOpen(false);
  }

  function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keyup", handleEscClose);

    return () => {
      document.removeEventListener("keyup", handleEscClose);
    };
  });

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
            shortFilms={shortFilms}
            notShortFilms={notShortFilms}
            isCheckingToken={isCheckingToken}
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
            isCheckingToken={isCheckingToken}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            noFooter={true}
            exit={exit}
            editProfile={editProfile}
            isCheckingToken={isCheckingToken}
          />
          <Route path="/signin">
            {isCheckingToken ? (
              <Preloader isCheckingToken={isCheckingToken} />
            ) : loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Login authorize={authorize} />
            )}
          </Route>
          <Route path="/signup">
            {isCheckingToken ? (
              <Preloader isCheckingToken={isCheckingToken} />
            ) : loggedIn ? (
              <Redirect to="/" />
            ) : (
              <Register registration={registration} />
            )}
          </Route>
          <Route path="*">
            <NotFound loggedIn={loggedIn} />
          </Route>
        </Switch>

        <Popup
          handleOverlayClose={handleOverlayClose}
          isOpen={popupOpen}
          message={message}
          onClose={closeAllPopups}
        ></Popup>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
