import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        bg="light"
        className="navbar shadow-sm p-3 bg-white rounded custom-header"
        expand
      >
        <Button variant="outline-info" onClick={this.props.toggle}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" navbar>
            <Nav.Link href="http://www.knit.ac.in/">KNIT Website</Nav.Link>
            <Nav.Link href="https://vahan.nic.in/nrservices/faces/user/searchstatus.xhtml">Vehicle Info</Nav.Link>
            <Nav.Link href="http://uptransport.upsdc.gov.in/en-us/">RTO Website</Nav.Link>
            <Nav.Link href="#"> Log Out </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
