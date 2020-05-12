import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import AllVehicle from '../search/AllVehicle';
import AddVehicle from '../addvechicle/AddVehicle';
import HomeComponent from "../home/HomeComponent";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Content extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <Router>
          <Switch>
            <Route exact path = '/home' component ={HomeComponent}></Route>
            <Route exact path = '/addVehicle' component ={AddVehicle}></Route>
          </Switch>
        </Router>

      </Container>
    );
  }
}

export default Content;
