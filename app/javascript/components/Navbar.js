import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function NavBar(props) {
  const handleLogOut = () => {
    console.log("tapped on log out");
    localStorage.removeItem("token");
    props.history.push("/");
  };

  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link onClick={handleLogOut}>Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(NavBar);
