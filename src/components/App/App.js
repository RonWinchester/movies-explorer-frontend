import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Main  from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {

  return (
    <div className="page__container">
      <Header></Header>
      <Switch>
        <Route>
         <Main></Main>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
