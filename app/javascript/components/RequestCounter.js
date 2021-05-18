import React from "react";
import GetHelpRequests from "../hooks/GetHelpRequestsHook";
import { Row } from "react-bootstrap";

function RequestCounter() {
  const { helpRequests } = GetHelpRequests();

  const totalHelpRequests = helpRequests.length;

  return (
    <Row>
      <div>
        <div className="request_counter">
          <p className="request_counter_para">
            {helpRequests.length != "0" && totalHelpRequests}
          </p>
        </div>
        <div className="request_counter_explainer_container">
          <p className="request_explainer">Current total requests</p>
        </div>
      </div>
    </Row>
  );
}

export default RequestCounter;
