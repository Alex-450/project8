import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { withRouter, NavLink } from "react-router-dom";

function NavBar(props) {
  const handleLogOut = () => {
    if (confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
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
      <Row>
        <Col>
          <Navbar expand="lg" className="navbar_top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-center">
                <NavLink
                  className="navbar_nav_link"
                  activeClassName="navbar_nav_link_active"
                  to="/"
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
    </div>
  );
}

export default withRouter(NavBar);