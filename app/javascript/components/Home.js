import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HelpRequestForm from "./HelpRequestForm";
import HelpRequest from "./HelpRequest.js";
import RequestMap from "./RequestMap";
import MapError from "./MapError";
import HelpRequestExplainer from "./HelpRequestExplainer";
import GetHelpRequests from "../hooks/GetHelpRequestsHook";
import RequestCounter from "./RequestCounter";

function Home() {
  const [showOrForm, setShowOrForm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState("");
  const { helpRequests } = GetHelpRequests();
  const [long, setLong] = useState(localStorage.getItem("longitude") || "");
  const [lat, setLat] = useState(localStorage.getItem("latitude") || "");

  const totalHelpRequests = helpRequests.length;

  return (
    <div>
      <Container fluid className="home_container">
        {totalHelpRequests != "0" && <RequestCounter />}
        <Row>
          <Col>
            {lat && long ? (
              <RequestMap
                showOrForm={showOrForm}
                setShowOrForm={setShowOrForm}
                setSelectedRequest={setSelectedRequest}
                helpRequests={helpRequests}
                lat={lat}
                long={long}
              />
            ) : (
              <MapError setLat={setLat} setLong={setLong} />
            )}
          </Col>
        </Row>
      </Container>
      {lat && long && (
        <Container>
          <Row>
            <Col className="help_request_container">
              {(() => {
                switch (showOrForm) {
                  case "help_request_show":
                    return (
                      <HelpRequest
                        showOrForm={showOrForm}
                        setShowOrForm={setShowOrForm}
                        selectedRequest={selectedRequest}
                      />
                    );
                  case "help_request_form_show":
                    return <HelpRequestForm lat={lat} long={long} />;
                  default:
                    return (
                      <HelpRequestExplainer
                        setShowOrForm={setShowOrForm}
                        helpRequests={helpRequests}
                      />
                    );
                }
              })()}
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Home;
