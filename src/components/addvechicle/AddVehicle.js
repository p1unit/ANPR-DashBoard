import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ImageUploader from "./ImageUploader";
import PlateDetector from "./PlateDetector";

class AddVehicle extends Component {
  render() {
    return (
      <div className="flex-container-uploader-card">
        <div className = "item">
          <ImageUploader />
        </div>
        <div className = "item">
        <PlateDetector  />
        </div>
      </div>
    );
  }
}

export default AddVehicle;
