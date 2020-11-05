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
          <Button className="landing_button" href="/signup">
            Sign up <span className="button_arrow">→</span>
          </Button>
        </Row>
        <Row>
          <Button className="landing_button" href="/login">
            Log in <span className="button_arrow">→</span>
          </Button>
        </Row>
      </Jumbotron>
    </Container>
  </div>
);

export default LandingPage;
