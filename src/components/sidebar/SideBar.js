import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../logo.png";
import {
  faHome,
  faAd,
  faPlus,
  faSearch,
  faClock,
  faUsers,
  faMobile,
  faQuestion,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faAd} pull="right" size="xs" />
          </Button>
          <img
            alt=""
            src={logo}
            width="50%"
            height="50%"
            className="rounded mx-auto d-block"
          />
        </div>

        <Nav className="flex-column pt-2">
          <p className="ml-3">Services Board</p>

          <Nav.Item className="active">
            <Nav.Link href="/home">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/addVehicle">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add Vehicle
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/allSearch">
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              All vehicle Search
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/pendingVehicle">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              Pending Status
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faInfo} className="mr-2" />
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              FAQ
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faMobile} className="mr-2" />
              Contact
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/team">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Team
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default SideBar;
