import React, { Component } from 'react';
import PendingRow from './pendingRow';
import API from '../../resources/API';
import Loader from "../../resources/loader"

class PendingComponent extends Component {

    constructor(props) {
        super(props);
       this.handleUpdate = this.handleUpdate.bind(this);
      }

    state = { 
        loading:true
     }

    componentDidMount() {
        
        API.get("getAllPending")    
        .then(res=>{
            const response = res.data;
            this.setState({ 
                data:response ,
                loading:false
            });
            console.log(this.state);
            console.log("hi");
        });
        
        // console.log("hi");
    }

    handleUpdate(){

        this.setState({loading:true});

        API.get("getAllPending")    
        .then(res=>{
            const response = res.data;
            this.setState({ 
                data:response ,
                loading:false
            });
            console.log(this.state);
        });

        console.log("debug");

    }


    render() { 

        return (
            <div>
            {
                this.state.loading ? 
                (<Loader></Loader>) :

                <div style={{ display: "flex", flexDirection: "row",flexWrap:"wrap",justifyContent:"center" }}>
                    {   this.state.data.map((variant, idx) => (
                    <PendingRow 
                        key = {idx}
                        id = {variant.id}
                        licenseNumber = {variant.licenseNumber}
                        inTime = {variant.inTime}
                        inImageUrl = {variant.inImageUrl}
                        vehicleType = {variant.vehicleType}
                        handleUpdate = {this.handleUpdate}
                    >

                    </PendingRow>))}
                </div>
                }
            </div>
         );
    }
}
 
export default PendingComponent;