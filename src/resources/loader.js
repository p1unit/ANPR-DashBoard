import React, { Component } from 'react';
import loader from "../../loader.png";

class Loader extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img
                  alt=""
                  src={loader}
                  width="100%"
                  height="100%"
                  style={{ maxHeight: "350px", border: "1px solid black" }}
                />
            </div>
         );
    }
}
 
export default Loader;