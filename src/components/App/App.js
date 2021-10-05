import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedMovies from "../SavedMovies/SavedMovies";
import { cards } from "../../constants/constants";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { getMovies } from "../../utils/MoviesApi";
import { filterMovies } from "../../utils/filter";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [movies, setMovies] = React.useState([]);
  const [requestProcessing, setRequestProcessing] = React.useState(false);
  const [like, setLike] = React.useState(false);
  const [filmsError, serFilmsError] = React.useState(false);
  const [moviesPage, setMoviesPage] = React.useState(false);

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
        localStorage.setItem("query", JSON.stringify(query));
        setMovies(filterFilms);
        setRequestProcessing(false);
      })
      .catch((err) => {
        console.log(`Ошибка при загрузке карточек: ${err}`);
        setRequestProcessing(false);
        serFilmsError(true);
      });
  };


  React.useEffect(() => {
    const movieSearch = JSON.parse(localStorage.getItem("movies"));
    //const querySearch = JSON.parse(localStorage.getItem("query"));
    movieSearch !== null ? setMovies(movieSearch) : setMovies([])
    
    console.log(movieSearch);
  }, [loggedIn, location.pathname]);

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
          movies={movies}
          requestProcessing={requestProcessing}
          handleRequest={handleRequest}
          like={like}
          handleLikeClick={handleLikeClick}
          filmsError={filmsError}
        />
        <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
          cards={cards}
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
