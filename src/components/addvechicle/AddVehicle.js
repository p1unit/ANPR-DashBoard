import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ImageUploader from "./ImageUploader";
import PlateDetector from "./PlateDetector";
import Axios from "axios";

class AddVehicle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plateDected:false,
      fileName:""
    };
    
  }

  render() {
    return (
      <div className="flex-container-uploader-card">
        <div className = "item">
          <ImageUploader onUploadSuccess={this.onUploadSuccess}/>
        </div>
        {/* <div className = "item">
        <PlateDetector  plateDected = {this.plateDected} fileName ={this.fileName}/>
        </div> */}
      </div>
    );
  }
}

export default AddVehicle;
