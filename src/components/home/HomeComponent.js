import React, { Component } from 'react';
import API from '../../resources/API';

import CounterInfoCard from './countcard/CountInfoCard';

class HomeComponent extends Component {
    // state = { 
    //     loading : true,
    //  }

    // componentDidMount() {

    //     var res;

    //     API.get("basicInfo")    
    //     .then(res=>{
    //         // console.log(res.data);
    //         const basicData = res.data;
    //         res = res.data;
    //         // this.setState({basicData:basicData});
    //         // this.setState({loading:false});
    //         this.setState({ 
    //             basicData:basicData ,
    //             loading:false
    //         });
    //         console.log(this.state);
    //     });
    //   }

      

    render() {
        // if(this.state.loading) 
        //     return ( <h1>Loading</h1> );
        // else    
            // return ( <h1>Loading - done</h1> );
            // return ( <CounterInfoCard basicData = {this.state.basicData}/> );
            return ( <CounterInfoCard /> );
    }
}
 
export default HomeComponent;