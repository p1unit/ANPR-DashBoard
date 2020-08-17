import React, { Component } from 'react';
import preview from "../../resources/preview.jpg";

class PendingRow extends Component {

    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
      }

    state = {  }

    handleTextChange(event) {
        console.log(event)
    }

    render() { 
        return ( 
        <Card border style={{ marginRight: "10px" }}>
             <Card.Body>
                <div style={{ display: "flex", flexDirection: "coloum" }}>

                <img
                  alt=""
                  src={preview}
                  width="100%"
                  height="100%"
                  style={{ maxHeight: "350px", border: "1px solid black" }}
                />

                <input
                    type="text"
                    onChange={this.handleChange}
                    onError={this.handleError}
                    style={{ marginBottom: "20px" }}
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

                </div> 
            </Card.Body>
            </Card>
        );
    }
}
 
export default PendingRow;