import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ImageUploader from "./ImageUploader";
import PlateDetector from "./PlateDetector";

class AddVehicle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plateDected:false,
      fileName:""
    };
    this.onUploadSuccess = this.onUploadSuccess.bind(this);
  }

  onUploadSuccess(fileName){

    this.setState({
      plateDected:true,
      fileName:fileName
    });

  }

  render() {
    return (
      <div className="flex-container-uploader-card">
        <div className = "item">
          <ImageUploader onUploadSuccess={this.onUploadSuccess}/>
        </div>
        <div className = "item">
        <PlateDetector  plateDected = {this.plateDected} fileName ={this.fileName}/>
        </div>
      </div>
    );
  }
}

export default AddVehicle;
