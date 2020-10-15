import React, { useState } from "react";

const logInUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleLogin = (user) => {
    setUser(user);
    console.log(user);
    if (user) return props.history.push("/home");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    fetch(`/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRF-Token": csrf,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);

        handleLogin(data.user);
      });
    setEmail("");
    setPassword("");
  };
  return { user, password, email };
};
