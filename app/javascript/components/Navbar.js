import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function NavBar(props) {
  const handleLogOut = () => {
    if (confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("token");
      props.history.push("/");
      console.log("user logged out");
    } else {
      // Do nothing
      console.log("user did not log out");
    }
  };

  const userAuthed = localStorage.getItem("token");

  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link href="/home">Home</Nav.Link>
            {!userAuthed && <Nav.Link href="/signup">Signup</Nav.Link>}
            {userAuthed && <Nav.Link href="/profile">Profile</Nav.Link>}
            {userAuthed && <Nav.Link onClick={handleLogOut}>Log out</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(NavBar);
