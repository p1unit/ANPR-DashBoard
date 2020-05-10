import React from "react";
import { Link } from "react-router-dom";
import knit_logo from "../../src/knit_logo.png";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">
          <Container>
            <Row>
              <Col>
                <img
                  alt=""
                  src={knit_logo}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />
              </Col>
              <Col Style="text-align: center; margin-top: 10px; margin-left: -12px;">KNIT ANPR System</Col>
            </Row>
          </Container>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
