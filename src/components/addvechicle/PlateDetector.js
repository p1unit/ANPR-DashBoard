import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import preview from "../../resources/preview.jpg";

class PlateDetector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      licensePlate: null,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {}

  render() {
    return (
      <div>
        <Card border style={{ marginRight: "10px" }}>
          <Card.Body>
            <div className="flex-container-coloum">
              <p style={{ dispaly: "flex", flexWrap: "wrap" }}>
                {"LicensePlate Preview"}
              </p>

              {this.state.licensePlate ? (
                <img
                  alt=""
                  src={this.state.licensePlate}
                  width="100%"
                  height="100%"
                  style={{ maxHeight: "150px", border: "1px solid black" }}
                />
              ) : (
                <img
                  alt=""
                  src={preview}
                  width="100%"
                  height="100%"
                  style={{ maxHeight: "150px", border: "1px solid black" }}
                />
              )}
              <div
                style={{
                  dispaly: "inline",
                  flexWrap: "wrap",
                  margin: "10px",
                  marginTop: "20px",
                }}
              >
                Edit detected Plate Number
              </div>
              <input
                type="text"
                onChange={this.handleChange}
                onError={this.handleError}
                style={{ marginBottom: "20px" }}
              />

              <Button variant="primary" size="lg" block>
                Submit
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default PlateDetector;
