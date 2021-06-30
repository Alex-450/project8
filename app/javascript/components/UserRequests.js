import React, { useContext } from "react";
import { Container, Table, Jumbotron, Button } from "react-bootstrap";
import GetHelpRequests from "../hooks/GetHelpRequestsHook";
import { UserContext } from "./Context/UserContext";
import DeleteHelpRequest from "../hooks/DeleteHelpRequestHook";
import HelpRequestFulfilled from "../hooks/HelpRequestFulfilledHook";

function UserRequests() {
  const { helpRequests } = GetHelpRequests();
  const { userData } = useContext(UserContext);
  const user_id = userData.id;

  const userHelpRequests = helpRequests.filter(
    (helpRequests) => helpRequests.user_id === user_id
  );

  return (
    <div>
      {userHelpRequests == 0 && (
        <Container fluid className="form_container">
          <Jumbotron className="form_jumbotron text-center">
            <p>You haven't submitted any requests yet</p>
            <p>You can submit help requests on the home page</p>
            <Button className="form_button" href="/home">
              Home →
            </Button>
          </Jumbotron>
        </Container>
      )}

      {userHelpRequests != 0 && (
        <Container fluid className="form_container">
          <Jumbotron className="form_jumbotron">
            <Table striped bordered hover className="requests_table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Completed?</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {userHelpRequests.map((userHelpRequest) => (
                  <tr key={userHelpRequest.id}>
                    <td>{userHelpRequest.title}</td>
                    <td>{userHelpRequest.description}</td>
                    {userHelpRequest.fulfilled == false && (
                      <td>
                        <Button
                          className="form_button"
                          onClick={() => {
                            HelpRequestFulfilled(userHelpRequest.id);
                          }}
                        >
                          Mark as completed →
                        </Button>
                      </td>
                    )}
                    {userHelpRequest.fulfilled == true && (
                      <td className="text-center">✔️</td>
                    )}
                    <td>
                      <Button
                        className="form_button"
                        onClick={() => {
                          DeleteHelpRequest(userHelpRequest.id);
                        }}
                      >
                        Delete →
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Jumbotron>
        </Container>
      )}
    </div>
  );
}

export default UserRequests;
