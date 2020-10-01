import React, { Component } from "react";
import { Card, Button } from "react-bootstrap"; 
import Datetime from "react-datetime";
const moment = require("moment");

class SearchBar extends Component {
  state = {
    vehicleType: "null",
    startDate: null,
    endDate: null,
    vehicleChange : null,
    inside:"null"
  };

  constructor(props) {
    super(props);

    this.vehicleChange = this.vehicleChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.changeVehicleStatus = this.changeVehicleStatus.bind(this);
  }

  passData = () => {
      const params = {
        "startDate":this.state.startDate,
        "endDate" : this.state.endDate
      }

      if(this.state.inside!="null"){
        params["inside"] = this.state.inside;
      }
       
      if(this.state.vehicleType!="null"){
        params["vehicleType"] = this.state.vehicleType;  
      }

      // console.log(params);

      this.props.getSearchResult(params);
  }

  handleEndDateChange(newDate) {

    this.setState({ endDate: moment.utc(newDate).format() });
    console.log(moment.utc(newDate).utcOffset(+330).format());
  }

  handleStartDateChange(newDate) {
    this.setState({ startDate: moment.utc(newDate).format() });
    console.log("startDate" + moment.utc(newDate).format());
  }

  changeVehicleStatus(value) {
    this.setState({ inside: value });
    console.log(value);
  }

  vehicleChange(value) {
    this.setState({ vehicleType: value });
    console.log(value);
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "coloum",justifyContent:"center"}}>

        <div style={{ display: "flex", flexDirection: "row" ,flexWrap:"wrap",width:"20%",justifyContent:"center" }}>
          <div>StartDateTime:</div>
          <Datetime
            onChange={this.handleStartDateChange}
            dateFormat="YYYY-MM-DD"
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row" ,flexWrap:"wrap",width:"20%",justifyContent:"center" }}>
          <div>EndDateTime:</div>
          <Datetime
            onChange={this.handleEndDateChange}
            dateFormat="YYYY-MM-DD"
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row" ,flexWrap:"wrap",width:"20%",justifyContent:"center" }}>
          <div>Vehicle Status</div>

          <select
            id="vehicleStatus"
            className="form-control"
            onChange={(e) => {
              this.changeVehicleStatus(e.target.value);
            }}
            style={{width:"70%"}}
          >
            <option value="null">All</option>
            <option value="true">Inside</option>
            <option value="false">Outside</option>
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "row" ,flexWrap:"wrap",width:"20%",justifyContent:"center" }}>
          <div>VehicleType</div>

          <select
            id="vehicleType"
            className="form-control"
            onChange={(e) => {
              this.vehicleChange(e.target.value);
            }}
            style={{width:"70%"}}
          >
            <option value="null">All</option>
            <option value="BUS">Bus</option>
            <option value="CAR">Car</option>
            <option value="TWO_WHEELER">Two Wheeler</option>
            <option value="TRUCK">Truck</option>
            <option value="OTHER">Other</option>
          </select>
          <div style={{ display: "flex", flexDirection: "row" ,flexWrap:"wrap",width:"30%",justifyContent:"center" }}>
          <Button variant="primary" size="sm" block onClick={()=>this.passData()}>
                Submit
              </Button>
          </div>    
        </div>
      </div>
    );
  }
}

export default SearchBar;
