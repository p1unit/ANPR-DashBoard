import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import DoughnutGraph from "./DoughnutGraph";
import LineGraph from "./LineGraph";

class CounterInfoCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="flex-container-line">
          <Card border="primary">
            <Card.Header style={{ textAlign: "center", padding: "5px" }}>
              Last 7 Days Data
            </Card.Header>
            <Card.Body style={{ padding: "0px" }}>
              <LineGraph />
            </Card.Body>
          </Card>

          <Card border="primary" style={{ margin: "10px" }}>
            <Card.Header style={{ textAlign: "center", padding: "5px" }}>
              Todays Visited
            </Card.Header>
            <Card.Body style={{ padding: "0px" }}>
              <DoughnutGraph />
            </Card.Body>
          </Card>

          <Card border="primary">
            <Card.Header style={{ textAlign: "center", padding: "5px" }}>
              Currently Inside
            </Card.Header>
            <Card.Body style={{ padding: "0px" }}>
              <DoughnutGraph />
            </Card.Body>
          </Card>
        </div>

        <div className="flex-container-row"></div>

        <Card border="primary" style={{ width: "18rem", marginTop: "10px"}}>
          <Card.Header style={{ textAlign: "center", padding: "5px" }}>
            Last 30 Days Count
          </Card.Header>
          <Card.Body>
            <Card.Title style={{ textAlign: "center", padding: "5px" }}>
              Total Visited 3799
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CounterInfoCard;
