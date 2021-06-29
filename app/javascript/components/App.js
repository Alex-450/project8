import React, { Component, useState, useMemo } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import Home from "./Home.js";
import Profile from "./Profile.js";
import UserRequests from "./UserRequests";
import Navbar from "./Navbar";
import { UserContext } from "./Context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { useHistory, Redirect } from "react-router-dom";

function App() {
  // const localState = JSON.parse(localStorage.getItem("user"));
  var localState = null;

  if (localStorage.getItem("user") === undefined) {
    localState = null;
  } else {
    localState = JSON.parse(localStorage.getItem("user"));
  }
  const [userData, setUserData] = useState(localState || null);
  const value = useMemo(
    () => ({ userData, setUserData }),
    [userData, setUserData]
  );

  // Check if user is authed

  const userAuthed = localStorage.getItem("token");

  // History setting for routing

  // let history = useHistory();

  // const handleAuthClick = () => {
  //   const token = localStorage.getItem("token");
  //   fetch(`/api/v1/user_is_authed`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => console.log(data));
  // };

  // Method for hiding components if user token is not set

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
      {localState && <Navbar />}
      <Switch>
        <UserContext.Provider value={value}>
          <Route exact path="/" component={LandingPage} />
          <AuthenticatedRoute exact path="/home" component={Home} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LogInForm} />
          <AuthenticatedRoute exact path="/profile" component={Profile} />
          <AuthenticatedRoute
            exact
            path="/myrequests"
            component={UserRequests}
          />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
