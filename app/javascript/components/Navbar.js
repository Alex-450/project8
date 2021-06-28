import React from "react";
import { Navbar, Nav, Row, Col, Container } from "react-bootstrap";
import { withRouter, NavLink } from "react-router-dom";

function NavBar(props) {
  const handleLogOut = () => {
    if (confirm("Are you sure you want to log out?")) {
      localStorage.clear();
      props.history.push("/");
    } else {
      // Do nothing
    }
  };

  const userAuthed = localStorage.getItem("token");

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navbar expand="lg" className="navbar_top">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-center">
                  <NavLink
                    className="navbar_nav_link"
                    activeClassName="navbar_nav_link_active"
                    to="/home"
                    exact={true}
                  >
                    Home
                  </NavLink>
                  {!userAuthed && (
                    <NavLink className="navbar_nav_link" to="/signup">
                      Signup
                    </NavLink>
                  )}
                  {userAuthed && (
                    <NavLink className="navbar_nav_link" to="/profile">
                      Profile
                    </NavLink>
                  )}
                  {userAuthed && (
                    <NavLink className="navbar_nav_link" to="/myrequests">
                      My Help Requests
                    </NavLink>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col>
            <Navbar>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  {userAuthed && (
                    <Nav.Link
                      className="navbar_logout_button"
                      onClick={handleLogOut}
                    >
                      Log out
                    </Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(NavBar);
