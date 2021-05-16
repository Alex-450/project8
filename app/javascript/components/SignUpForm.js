import React, { useState } from "react";
import { Container, Jumbotron, Form, Row, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function SignUpForm(props) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [id_document, setIdDocument] = useState(null);
  const [user, setUser] = useState({});

  const handleLogin = (user) => {
    setUser(user);
    if (user) return props.history.push("/");
  };

  const handleFileUpload = (event) => {
    setIdDocument(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    const formData = new FormData();

    formData.append("first_name", first_name),
      formData.append("last_name", last_name),
      formData.append("email", email),
      formData.append("password", password),
      formData.append("password_confirmation", password_confirmation),
      formData.append("id_document", id_document);

    fetch(`/api/v1/users`, {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRF-Token": csrf,
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
        handleLogin(data.user);
      });
    setEmail("");
    setPassword("");
  };
  return (
    <Container fluid className="form_container">
      <Jumbotron className="form_jumbotron">
        <Row className="justify-content-center m-3">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="form_control"
                id="signup_form_control"
                type="text"
                placeholder="e.g. Alex"
                name="first_name"
                required
                value={first_name}
                onChange={(event) => setFirstName(event.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className="form_control"
                id="signup_form_control"
                type="text"
                placeholder="e.g. Smith"
                name="last_name"
                required
                value={last_name}
                onChange={(event) => setLastName(event.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="form_control"
                id="signup_form_control"
                type="email"
                placeholder="e.g. alex.smith@email.com"
                name="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="form_control"
                id="signup_form_control"
                type="password"
                name="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                className="form_control"
                id="signup_form_control"
                type="password"
                name="password_confirmation"
                required
                placeholder="••••••••"
                value={password_confirmation}
                onChange={(event) =>
                  setPasswordConfirmation(event.target.value)
                }
              ></Form.Control>
              <Form.Group>
                <Form.Label>Upload ID</Form.Label>
                <Form.File
                  className="form_control"
                  id="signup_form_control"
                  required
                  onChange={handleFileUpload}
                  accept=".pdf, .jpeg, .png"
                />
              </Form.Group>
            </Form.Group>
            <Row className="justify-content-center">
              <Button className="form_button" type="submit" name="Sign Up">
                Sign up →
              </Button>
            </Row>
          </Form>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default withRouter(SignUpForm);
