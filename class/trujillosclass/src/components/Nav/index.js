import React from "react";
import "../../index.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";


function Navlinks() {
  return (
    <div>
      <Nav>
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Item>
              <NavLink className="navlinks" eventKey="link-1" to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="navlinks" eventKey="link-2" to="/kindergarten">Kindergarten</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="navlinks" eventKey="link-3" to="/firstgrade">First Grade</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="navlinks" eventKey="link-4" to="/secondgrade">Second Grade</NavLink>
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>
      </Nav>
    </div>
  );
}

export default Navlinks;