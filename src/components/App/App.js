import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

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
        <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} />
        {/* <Route path="/movies">
        {!loggedIn ? <Redirect to="/" /> : <Movies />}
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
