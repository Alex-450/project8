import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => (
  <div>
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-center">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavBar;
