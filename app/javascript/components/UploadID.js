import React from "react";
import { Container, Form, Jumbotron, Row, Button } from "react-bootstrap";

function UploadID() {
  const handleSubmit = (event) => {
    event.preventDefault();

    //   fetch("TO DO - endpoint for file upload"),
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     };
  };
  return (
    <Container fluid className="form_container">
      <Jumbotron className="form_jumbotron">
        <Row className="justify-content-center m-3">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.File label="Upload ID" accept=".pdf, .jpeg, .png" />
            </Form.Group>
          </Form>
        </Row>
        <Row className="justify-content-center">
          <Button className="form_button" type="submit" name="upload">
            Upload ↑
          </Button>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default UploadID;
