import React from "react";
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";

const LandingPage = () => (
  <div>
    <Container fluid className="landing_container">
      <Jumbotron className="landing_jumbotron">
        <Row className="justify-content-center">
          <h1 className="landing_header">Local aid</h1>
        </Row>
        <Row className="m-4">
          <Col className="align-text-center">
            <Button className="landing_button" href="/signup">
              Sign up →
            </Button>
          </Col>
          <Col>
            <Button className="landing_button" href="/login">
              Log in <br></br> →
            </Button>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  </div>
);

export default LandingPage;
