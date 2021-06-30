import React, { useContext } from "react";
import { Container, Button, Row } from "react-bootstrap";
import ShowHelpRequest from "../hooks/ShowHelpRequestHook";
import volunteerHelpRequest from "../hooks/VolunteerHelpRequestHook";
import { UserContext } from "./Context/UserContext";

function HelpRequest(props) {
  const { helpRequest } = ShowHelpRequest(props.selectedRequest);
  const { userData } = useContext(UserContext);
  const user_id = userData.id;

  return (
    <Container>
      <div className="help_request_container">
        <Row>
          <h1>{helpRequest.title}</h1>
        </Row>
        <Row>
          <h3></h3>
        </Row>
        <Row>
          <h5>Description:</h5>
        </Row>
        <Row>
          <p>{helpRequest.description}</p>
        </Row>
        <Row>
          <Button
            className="help_request_form_button"
            onClick={() => {
              volunteerHelpRequest(user_id, helpRequest.id);
            }}
          >
            Volunteer <span className="button_arrow">→</span>
          </Button>
        </Row>
        <Row>
          <Button onClick={() => props.setShowOrForm("help_request_form_show")}>
            Submit a help request <span className="button_arrow">→</span>
          </Button>
        </Row>
      </div>
    </Container>
  );
}

export default HelpRequest;
