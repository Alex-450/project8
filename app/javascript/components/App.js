import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import Home from "./Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LogInForm} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
