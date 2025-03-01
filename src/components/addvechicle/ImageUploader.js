import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import preview from "../../resources/preview.jpg";
import AzureStorage from "../../bundle/azure-storage.blob";
const { BlobServiceClient } = require('@azure/storage-blob');


class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
    // this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload = ()=>{

    let blobUri = 'https://' + 'anprimages' + '.blob.core.windows.net';
    let SAS = '?sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2020-09-16T16:03:57Z&st=2020-08-16T08:03:57Z&spr=https&sig=pRMcbSiyAtMXAohumIMCGepQgvwErSbHpFnWCuNnoxQ%3D';
    var finishedOrError = false;
    let containerName = 'vehicle';
    var blobService = AzureStorage.createBlobServiceWithSas(blobUri,SAS);
    var file = this.refs['fileinput'].files[0];
    

    blobService.createBlockBlobFromBrowserFile(containerName, file.name, file, {blockSize : file.size}, function(error, result, response) {
      finishedOrError = true;
      if (error) {
          alert("Upload Failed :"+error);
      } else {
        alert("Upload Successful");
          // this.props.onUploadSuccess(file.name);
      }
  });

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

    console.log(this.props);

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
                ref = "fileinput"
                onChange={this.handleChange}
                onError={this.handleError}
                style={{ margin: "30px" }}
              />

              <Button variant="primary" size="lg" block onClick={ () => this.handleUpload()}>
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
