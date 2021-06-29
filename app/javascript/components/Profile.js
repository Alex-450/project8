import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { Container, Jumbotron, Table } from "react-bootstrap";

function Profile() {
  const { userData } = useContext(UserContext);
  return (
    <Container fluid className="form_container">
      <Jumbotron className="form_jumbotron">
        <Table striped bordered hover className="requests_table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userData.first_name}</td>
              <td>{userData.last_name}</td>
              <td>{userData.email}</td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
    </Container>
  );
}

export default Profile;
