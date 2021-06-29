import React from "react";
import GetHelpRequests from "../hooks/GetHelpRequestsHook";
import { Container, Button, Badge } from "react-bootstrap";

function RequestCounter() {
  const { helpRequests } = GetHelpRequests();

  const unfulfilledHelpRequests = helpRequests.filter(
    (helpRequests) => helpRequests.fulfilled == false
  );

  const totalHelpRequests = unfulfilledHelpRequests.length;

  return (
    <Container fluid>
      <Button className="request_counter_button" variant="primary">
        Help Requests <Badge variant="light">{totalHelpRequests}</Badge>
        <span className="sr-only"></span>
      </Button>
    </Container>
  );
}

export default RequestCounter;
