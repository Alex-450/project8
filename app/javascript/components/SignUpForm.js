import React from "react";
import { Jumbotron, Form, Button, Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.history.push("/home");

    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    if (this.state.password !== this.state.password_confirmation) {
      alert("passwords do not match");
    } else {
      fetch("api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-CSRF-Token": csrf },
        body: JSON.stringify(this.state),
      })
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          // localStorage.setItem("token", data.jwt);
          // props.handleLogin(data.user);
        });
    }
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
    } = this.state;
    return (
      <Container fluid className="form_container">
        <Jumbotron className="form_jumbotron">
          <Row className="justify-content-center m-3">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  className="form_control"
                  type="text"
                  placeholder="e.g. Alex"
                  name="first_name"
                  required
                  value={first_name}
                  onChange={this.handleInputChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className="form_control"
                  type="text"
                  placeholder="e.g. Smith"
                  name="last_name"
                  required
                  value={last_name}
                  onChange={this.handleInputChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="form_control"
                  type="email"
                  placeholder="e.g. alex.smith@email.com"
                  name="email"
                  required
                  value={email}
                  onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                  className="form_control"
                  type="password"
                  name="password_confirmation"
                  required
                  placeholder="••••••••"
                  value={password_confirmation}
                  onChange={this.handleInputChange}
                ></Form.Control>
              </Form.Group>
              <Row className="justify-content-center">
                <Button
                  className="form_button"
                  name="sign up"
                  type="submit"
                  name="Sign Up"
                >
                  Sign up →
                </Button>
              </Row>
            </Form>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default withRouter(SignUpForm);
