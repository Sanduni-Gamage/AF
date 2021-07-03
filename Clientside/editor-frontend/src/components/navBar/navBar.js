import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
          <Navbar.Brand href="#home">&nbsp;&nbsp; Editor App </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/all-conferences">Conferences</Nav.Link>
              <Nav.Link href="/insert-conference">Insert Conference</Nav.Link>
              <NavDropdown title="Templates" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Research Paper Templates</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Workshop Presentation Templates
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/insert-rp-templates">
                  Upload Research Paper Templates
                </NavDropdown.Item>
                <NavDropdown.Item href="/insert-pt-templates">
                  Upload Presentation Templates
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/all-rp-download-templates">Download Research Paper Templates</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                 Download Presentation Templates
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
