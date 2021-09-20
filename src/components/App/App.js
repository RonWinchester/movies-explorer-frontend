import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Main  from "../Main/Main";
import Header from "../Header/Header";

function App() {
  return (
    <div className="page__container">
      <Header></Header>
      <Switch>
        <Route>
         {/*  <Main></Main> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
