import React, { useState, useEffect, setState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GetLocationHook from "../hooks/GetLocationHook";
import HelpRequestForm from "./HelpRequestForm";
import HelpRequest from "./HelpRequest.js";
import RequestMap from "./RequestMap";
import { UserContext } from "./Context/UserContext";

function Home() {
  const { lat, long, error } = GetLocationHook();
  const { userData } = useContext(UserContext);
  const [showOrForm, setShowOrForm] = useState("help_request_show");

  // TODO Switch statement here for user submitting / viewing request

  return (
    <Container fluid>
      <Row>
        <Col>
          <RequestMap showOrForm={showOrForm} setShowOrForm={setShowOrForm} />
        </Col>
        <Col>
          {(() => {
            switch (showOrForm) {
              case "help_request_show":
                return (
                  <HelpRequest
                    showOrForm={showOrForm}
                    setShowOrForm={setShowOrForm}
                  />
                );
              case "help_request_form_show":
                return <HelpRequestForm lat={lat} long={long} />;
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
