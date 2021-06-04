function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const login = (event) => {
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
    .then(handleErrors)
    .then((resp) => resp.json())
    .then((data) => {
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));
      handleLogin(JSON.stringify(data.user));
    });
  // setEmail("");
  // setPassword("");
};

const handleLogin = (user) => {
  setUserData(user);
  if (user) return setUserData(user), props.history.push("/");
};

export const logout = () => {
  if (confirm("Are you sure you want to log out?")) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    props.history.push("/");
    console.log("user logged out");
  } else {
    // Do nothing
    console.log("user did not log out");
  }
};

// export default { login, logout };
