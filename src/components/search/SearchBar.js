import React, { Component } from "react";
import Datetime from "react-datetime";

class SearchBar extends Component {
  state = {
    vehicleType: "CAR",
  };

  constructor(props) {
    super(props);

    this.vehicleChange = this.vehicleChange.bind(this);
  }

  vehicleChange(value) {
    console.log("hello");
    this.setState({ vehicleType: value });
    this.props.changeVehicleType(value);
  }

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p>StartDateTime:</p>
        <Datetime
          onChange={this.props.handleStartDateChange}
          dateFormat="YYYY-MM-DD"
          style={{ width: "10%" }}
        />

        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <p>EndDateTime:</p>
          <Datetime
            onChange={this.props.handleEndDateChange}
            dateFormat="YYYY-MM-DD"
            style={{ width: "10%" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
          <label>Vehicle Status</label>

          <select
            id="vehicleStatus"
            className="form-control"
            onChange={(e) => {
              this.props.changeVehicleStatus(e.target.value);
            }}
          >
            <option value="null">All</option>
            <option value="true">Inside</option>
            <option value="false">Outside</option>
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
          <p>VehicleType</p>

          <select
            id="vehicleType"
            className="form-control"
            onChange={(e) => {
              this.vehicleChange(e.target.value);
            }}
          >
            <option value="null">All</option>
            <option value="BUS">Bus</option>
            <option value="CAR">Car</option>
            <option value="TWO_WHEELER">Two Wheeler</option>
            <option value="TRUCK">Truck</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SearchBar;
