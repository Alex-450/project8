import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { Container, Jumbotron } from "react-bootstrap";

function Profile() {
  const { userData } = useContext(UserContext);
  return (
    <Container fluid className="form_container">
      <Jumbotron className="form_jumbotron">
        <p>First name: {userData.first_name}</p>
        <p>Last name: {userData.last_name}</p>
        <p>Email: {userData.email}</p>
      </Jumbotron>
    </Container>
  );
}

export default Profile;
