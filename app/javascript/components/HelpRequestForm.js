import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { Container, Form, Row, Button } from "react-bootstrap";
import GetRequestTypes from "../hooks/GetRequestTypesHook";

function HelpRequestForm(props) {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [request_type_id, setRequestType] = useState("");
  const { userData } = useContext(UserContext);

  const { requestTypes } = GetRequestTypes();

  // set user lat and long from props

  const latitude = props.lat.toString();
  const longitude = props.long.toString();
  const user_id = userData.id;

  const submitHelpRequest = (event) => {
    event.preventDefault();

    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");

    fetch("api/v1/help_requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRF-Token": csrf,
      },
      body: JSON.stringify({
        title,
        description,
        latitude,
        longitude,
        request_type_id,
        user_id,
      }),
    }).then((response) => response.json());
  };
  return (
    <Container>
      <h1>Submit Help Request</h1>
      <Form onSubmit={submitHelpRequest}>
        <Form.Group>
          <Form.Label>Help Request Title</Form.Label>
          <Form.Control
            className="form_control"
            type="text"
            placeholder="e.g. Handyman required"
            name="title"
            value={title}
            required
            onChange={(event) => setTitle(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            className="form_control"
            as="textarea"
            placeholder="e.g. I need someone to paint my wall..."
            name="description"
            value={description}
            required
            onChange={(event) => setDescription(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Request Type</Form.Label>
          <Form.Control
            as="select"
            className="form_control"
            name="request_type"
            value={request_type_id}
            required
            onChange={(event) => setRequestType(event.target.value)}
          >
            <option value="">None</option>
            {requestTypes.map((rt) => (
              <option key={rt.id} value={rt.id}>
                {rt.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button
          className="help_request_form_button"
          type="submit"
          name="Submit help request"
        >
          Submit help request <span className="button_arrow">→</span>
        </Button>
      </Form>
    </Container>
  );
}

export default HelpRequestForm;
