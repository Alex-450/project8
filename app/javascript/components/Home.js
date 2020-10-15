import React, { useState, useEffect, setState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GetLocationHook from "../hooks/GetLocationHook";
import HelpRequestForm from "./HelpRequestForm";
import HelpRequest from "./HelpRequest.js";
import RequestMap from "./RequestMap";

function Home() {
  const { lat, long, error } = GetLocationHook();
  // const { showOrForm, setShowOrForm } = setState("check");

  const showOrForm = "check";

  // TODO Switch statement here for user submitting / viewing request

  return (
    <Container fluid>
      <Row>
        <Col>
          <RequestMap />
        </Col>
        <Col>
          {(() => {
            switch (showOrForm) {
              case "help_request_show":
                return <HelpRequest />;
              default:
                return <HelpRequestForm lat={lat} long={long} />;
            }
          })()}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
