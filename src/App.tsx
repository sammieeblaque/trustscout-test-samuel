import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Home from "./pages/Home";
// import SignIn from "./pages/SignIn";
// import Signup from "./pages/SignUp";

import withAuthentication from "./components/withAuthentication";

import * as routes from "./routes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Container style={{ minHeight: "100vh" }}> */}
      <Navigation />
      <div>
        <Route exact path={routes.LANDING_PAGE} component={SignIn} />
        <Route exact path={routes.SIGN_UP} component={SignUp} />
        <Container className="contain">
          <Route exact path={routes.HOME} component={Home} />
        </Container>
        {/* <Route exact path={routes.SIGN_IN} component={SignIn} /> */}
      </div>
      {/* </Container> */}
    </BrowserRouter>
  );
};

export default withAuthentication(App);
