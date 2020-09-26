import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Home from "./Home.js";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { useHistory, Redirect } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});

  const handleLogin = (user) => {
    setUser(user);
  };

  let history = useHistory();

  const handleAuthClick = () => {
    const token = localStorage.getItem("token");
    fetch(`/api/v1/user_is_authed`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  <LoginForm handleAuthClick={handleAuthClick} />;
  <SignUpForm handleAuthClick={handleAuthClick} />;

  <LoginForm handleLogin={handleLogin} />;
  <SignUpForm handleLogin={handleLogin} />;

  const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <AuthenticatedRoute exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/login" component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
