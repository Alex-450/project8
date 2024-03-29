import React, { useState, useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { Container, Jumbotron, Form, Row, Button, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
// import login from "./Services/authentication";

function LogInForm(props) {
  const { userData, setUserData } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});

  const handleLogin = (user) => {
    setUserData(user);
    if (user) return setUserData(JSON.parse(user)), props.history.push("/home");
  };

  function handleErrors(response) {
    if (!response.ok) {
      setError(response.statusText);
      throw Error(response.statusText);
    }
    return response;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

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
      .then(setIsLoading(false))
      .then(handleErrors)
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
        handleLogin(JSON.stringify(data.user));
      });
    setEmail("");
    setPassword("");
  };
  return (
    <Container fluid className="form_container">
      <Jumbotron className="form_jumbotron">
        <Row className="justify-content-center m-3">
          <Form className="user_form" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="form_control"
                id="email"
                type="email"
                name="email"
                required
                placeholder="e.g. alex.smith@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="form_control"
                id="password"
                type="password"
                name="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></Form.Control>
            </Form.Group>
            <Row className="justify-content-center">
              <Button
                className="form_button"
                type="submit"
                onClick={props.handleAuthClick}
              >
                Log in →
              </Button>
            </Row>
            {error && (
              <Row>
                <Col>{error}</Col>
              </Row>
            )}
          </Form>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default withRouter(LogInForm);
