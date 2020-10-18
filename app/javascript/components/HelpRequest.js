import React, { useState } from "react";
import { Button } from "react-bootstrap";

function HelpRequest(props) {
  // const [showOrForm, setShowOrForm] = useState("");
  return (
    <div>
      <p>Help request view to go here</p>
      <Button onClick={() => props.setShowOrForm("help_request_form_show")}>
        Submit a help request →
      </Button>
    </div>
  );
}

export default HelpRequest;
