import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";

function HelpRequestExplainer(props) {
  return (
    <div>
      <p>default view</p>
      <Button
        className="big_button"
        onClick={() => props.setShowOrForm("help_request_form_show")}
      >
        Submit a request <span className="button_arrow">→</span>
      </Button>
    </div>
  );
}

export default HelpRequestExplainer;
