import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
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

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

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
          cards={cards}
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
          <NotFound  />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
