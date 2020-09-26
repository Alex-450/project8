import React, { useState } from "react";
import { Container, Jumbotron, Form, Row, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function LoginForm(props) {
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
  return (
    <Container fluid className="form_container">
      <Jumbotron className="form_jumbotron">
        <Row className="justify-content-center">
          <Form className="user_form" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="form_control"
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
          </Form>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default withRouter(LoginForm);
