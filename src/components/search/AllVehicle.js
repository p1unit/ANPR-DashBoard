import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import API from '../../resources/API';
import Loader from "../../resources/loader"

import SearchBar from "./SearchBar";
import StickyHeadTable from "../table/VehicleTable"
const moment = require("moment");

class AllVehicle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rows:null
    };
    this.getSearchResult = this.getSearchResult.bind(this);
  }

  getSearchResult(params){

    console.log(params);

    API.get("allVehicle",{params})      
    .then(res=>{
        res = res.data;
        this.setState({
          rows:res.pageData,
          haveData:true
        });
        console.log(res);
    });

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
            getSearchResult={this.getSearchResult}
          />
          {this.state.rows!=null ? (
                <StickyHeadTable rows = {this.state.rows}/>
              ) : (
                <Loader></Loader>
              )}
        </Card.Body>
      </Card>
    );
  }
}

export default AllVehicle;
