import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import preview from "../../resources/preview.jpg";

class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleChange(event) {
    var file = event.target.files[0];

    if (file) {
      this.setState({
        file: window.URL.createObjectURL(file),
      });
    }
  }

  handleError(event) {}

  render() {
    return (
      <div>
        <Card border style={{ marginRight: "10px" }}>
          <Card.Body>
            <div className="flex-container-coloum">
              {/* <img alt="" src={this.state.file} width="100%" height="100%" /> */}
              {this.state.file ? (
                <img
                  alt=""
                  src={this.state.file}
                  width="100%"
                  height="100%"
                  style={{ maxHeight: "350px", border: "1px solid black" }}
                />
              ) : (
                <img
                  alt=""
                  src={preview}
                  width="100%"
                  height="100%"
                  style={{ maxHeight: "350px", border: "1px solid black" }}
                />
              )}
              <input
                type="file"
                onChange={this.handleChange}
                onError={this.handleError}
                style={{ margin: "30px" }}
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

export default ImageUploader;
