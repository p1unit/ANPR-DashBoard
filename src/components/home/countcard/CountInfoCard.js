import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import DoughnutGraph from "./DoughnutGraph";

class CounterInfoCard extends Component {
  state = {};
  render() {
    return (
      <div className="flex-container-coloum">
        <Card border="primary">
          <Card.Header style={{ textAlign: "center", padding: "5px" }}>
            Todays Visited
          </Card.Header>
          <Card.Body style={{ padding: "0px" }}>
            <DoughnutGraph />
          </Card.Body>
        </Card>

        <Card border="primary" style={{margin:"10px"}}>
          <Card.Header style={{ textAlign: "center", padding: "5px" }}>
            Currently Inside
          </Card.Header>
          <Card.Body style={{ padding: "0px" }}>
            <DoughnutGraph />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CounterInfoCard;
