import React from "react";
import { useHistory } from "react-router-dom";
import { Jumbotron, Form, Button, Container, Row, Col } from "react-bootstrap";

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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

    fetch("api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then((resp) => resp.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt).then(history.push("/home"));
      });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container fluid className="form_container">
        <Jumbotron className="form_jumbotron">
          <Row className="justify-content-center">
            <Form className="user_form" onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="form_control"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. alex.smith@email.com"
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
              <Row className="justify-content-center">
                <Button className="form_button" type="submit">
                  Log in →
                </Button>
              </Row>
            </Form>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default LogInForm;
