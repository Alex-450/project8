import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";

function HelpRequestExplainer(props) {
  return (
    <Container className="request_explainer_container">
      <Row>
        <Col>
          <p>Select a help request on the map to view details and volunteer</p>
          <p>
            Select 'Submit a request' to create a help request. This will be
            linked to your estimated current location.
          </p>
          <i id="map_marker_two" className="fas fa-map-marker-alt fa-2x"></i>
          <p>Material Help Requests</p>
          <i id="map_marker_one" className="fas fa-map-marker-alt fa-2x"></i>
          <p>One Time Help Requests</p>
          <Button
            className="big_button"
            onClick={() => props.setShowOrForm("help_request_form_show")}
          >
            Submit a request <span className="button_arrow">→</span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HelpRequestExplainer;
