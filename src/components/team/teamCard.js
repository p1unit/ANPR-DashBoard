import React, { Component } from 'react';
import preview from "../../resources/preview.jpg";
import { Card, Button } from "react-bootstrap";

class TeamCard extends Component {
    state = {  }
    render() { 
        return ( 
            <Card border style={{ marginRight: "10px",marginTop:"10px",width:'18rem' }}>
            <Card.Img variant="top" src = {this.props.image} style={{height:"18rem"}}/>
             <Card.Body>
             <div style={{ display: "flex", flexDirection: "row",flexWrap:"wrap",justifyContent:"center" }}>

                    <div style={{width:"100%",textAlign:"center"}} > {this.props.name} </div>
                    <div style={{width:"100%",textAlign:"center"}} > {this.props.title} </div>
                    <div style={{width:"100%",textAlign:"center"}} > {this.props.year} </div>
                     
                    <div style={{ display: "flex", flexDirection: "coloum",flexWrap:"wrap",marginTop:"10px",justifyContent:"center" }}>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>  
                    <a href="#" class="fa fa-linkedin"></a>
                </div>
                </div> 
            </Card.Body>
            </Card>
         );
    }
}
 
export default TeamCard;