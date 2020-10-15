import React, { Component, useState, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import UploadID from "./UploadID";
import Home from "./Home.js";
import Profile from "./Profile.js";
import Navbar from "./Navbar";
import Store, { UserContext } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { useHistory, Redirect } from "react-router-dom";

function App() {
  // const [userInfo, setUserInfo] = useState({});
  // const [user, setUser] = useState({});
  // const [user, setUser] = useContext(UserContext);

  // const handleLogin = (user) => {
  //   setUser(user);
  //   if (user) return props.history.push("/home");
  // };

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
    // <Store>
    <BrowserRouter>
      {userAuthed && <Navbar />}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <AuthenticatedRoute exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/login" component={LoginForm} />
        <AuthenticatedRoute exact path="/profile" component={Profile} />
        <AuthenticatedRoute exact path="/uploadid" component={UploadID} />
      </Switch>
    </BrowserRouter>
    // </Store>
  );
}

export default App;
