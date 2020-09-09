import React, { Component } from 'react';
import preview from "../../resources/preview.jpg";
import { Card, Button } from "react-bootstrap";
import API from '../../resources/API';

class PendingRow extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.vehicleChange = this.vehicleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
      }

    state = {
        vehicleType : "OTHER"
      }

    vehicleChange(value){
        this.setState({ vehicleType: value });
    }

    handleChange(event) {
        console.log(event.value)
    }

    handleSubmit(){
        const lNumber = this.refs['licenseNumber'].value;

        var Vehicle = {
            "id":this.props.id,
            "licenseNumber" : lNumber,
            "inTime": this.props.inTime,
            "inImageUrl" : this.props.inImageUrl,
            "vehicleType" : this.state.vehicleType,
            "inside":true
        }

        API.post('addVehicle', Vehicle ,{
            headers : {
                'Content-Type': 'application/json',
            }
        }).then(response => {

            this.props.handleUpdate();
            console.log("OK:" + response);
    
        }).catch(err =>{
            console.log("Error:" + err);
            alert("Failed");
        });
    }

    handleDelete(){
        
        const lNumber = this.refs['licenseNumber'].value;

        var Vehicle = {
            "id":this.props.id,
            "licenseNumber" : lNumber,
            "inTime": this.props.inTime,
            "inImageUrl" : this.props.inImageUrl,
            "vehicleType" : this.state.vehicleType,
            "inside":true
        }

        API.post('deleteVehicle', Vehicle ,{
            headers : {
                'Content-Type': 'application/json',
            }
        }).then(response => {

            this.props.handleUpdate();
            console.log("OK:" + response);
    
        }).catch(err =>{
            console.log("Error:" + err);
            alert("Failed");
        });

    }

    render() { 
        return ( 
        <Card border style={{ marginRight: "10px",marginTop:"10px",width:'18rem' }}>
            <Card.Img variant="top" src={this.props.inImageUrl} />
             <Card.Body>
                <div style={{ display: "flex", flexDirection: "row",flexWrap:"wrap",justifyContent:"center" }}>

                <input
                    type="text"
                    ref="licenseNumber"
                    defaultValue = {this.props.licenseNumber}
                    onChange={this.handleChange}
                    onError={this.handleError}
                    style={{ marginBottom: "20px", marginTop:"20px" }}
              />

                    <select
                        id="vehicleType"
                        className="form-control"
                        onChange={(e) => {
                        this.vehicleChange(e.target.value);
                    }}
                    >
                    <option value="OTHER">Other</option>
                    <option value="BUS">Bus</option>
                    <option value="CAR">Car</option>
                    <option value="TWO_WHEELER">Two Wheeler</option>
                    <option value="TRUCK">Truck</option>
                </select>
                <div  style={{ display: "flex", flexDirection: "coloum",justifyContent:"center", marginTop:"10px" }} >
                    <Button 
                        variant="success"
                        onClick = {()=>this.handleSubmit()}
                        style = {{ marginRight:"10px" , width:"5em"}}>
                        Add
                    </Button>
                    <Button 
                        variant="danger"
                        onClick = {()=>this.handleDelete()}
                        style = {{ marginLeft:"10px" }}>
                        Delete
                    </Button>
                </div>

                </div> 
            </Card.Body>
            </Card>
        );
    }
}
 
export default PendingRow;