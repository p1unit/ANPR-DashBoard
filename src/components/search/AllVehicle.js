import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Datetime from "react-datetime";
import SearchBar from "./SearchBar";
import StickyHeadTable from "../table/VehicleTable"
const moment = require("moment");

class AllVehicle extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: moment().format(),
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.changeVehicleType = this.changeVehicleType.bind(this);
    this.changeVehicleStatus = this.changeVehicleStatus.bind(this);
  }

  handleEndDateChange(newDate) {
    console.log(
      "EndDate " +
        moment
          .utc(newDate)
          .utcOffset(+330)
          .format()
    );
  }

  handleStartDateChange(newDate) {
    console.log(
      "StartDate " +
        moment
          .utc(newDate)
          .utcOffset(+330)
          .format()
    );
  }

  changeVehicleType(event) {
    console.log("VehicleChange: " + event);
  }

  changeVehicleStatus(value) {
    console.log("changeVehicleStatus" + value);
  }

  render() {
    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <SearchBar
            handleStartDateChange={this.handleStartDateChange}
            handleEndDateChange={this.handleEndDateChange}
            changeVehicleType={this.changeVehicleType}
            changeVehicleStatus={this.changeVehicleStatus}
          />
          <StickyHeadTable/>
        </Card.Body>
      </Card>
    );
  }
}

export default AllVehicle;
