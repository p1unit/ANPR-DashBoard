import React, { Component } from 'react';
import loader from "../loader.svg";

class Loader extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ display: "flex", flexDirection: "row",flexWrap:"wrap",justifyContent:"center" }}>
                <img
                  alt=""
                  src={loader}
                  width="100%"
                  height="100%"
                  style={{ maxHeight: "200px", maxWidth:"200px" , marginTop:"20px" }}
                />
            </div>
         );
    }
}
 
export default Loader;