import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? (
          <div className='protected-route-wrapper'>
            <Header loggedIn={props.loggedIn}></Header>
            <Component {...props} />
            {!props.noFooter &&<Footer></Footer>}
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    </Route>
  );
};

export default ProtectedRoute;
