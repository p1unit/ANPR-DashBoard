import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import AllVehicle from "../search/AllVehicle";
import AddVehicle from "../addvechicle/AddVehicle";
import HomeComponent from "../home/HomeComponent";
import PendingComponent from "../pendingVehicles/pendingComponent";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

class Content extends React.Component {

  
  render() {

    const Auth = true;

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest}
        render={props =>
          Auth ? ( <Component {...props} /> ) :  ( <Redirect to={ 
            { pathname: "/"
          }}
      />)}
      />);


return (
  <Container
    fluid
    className={classNames("content", { "is-open": this.props.isOpen })}
  >
    <NavBar toggle={this.props.toggle} />
    
    <Router>
      <Switch>
        <PrivateRoute exact path='/home' component={HomeComponent}/>
        <PrivateRoute exact path="/addVehicle" component={AddVehicle}/>
        <PrivateRoute exact path="/allSearch" component={AllVehicle}/>
        <PrivateRoute exact path="/pendingVehicle" component={PendingComponent}/>
      </Switch>
    </Router>
  </Container>
);

        

    // return (
    //   <Container
    //     fluid
    //     className={classNames("content", { "is-open": this.props.isOpen })}
    //   >
    //     <NavBar toggle={this.props.toggle} />
        
    //     <Router>
    //       <Switch>
    //         <Route exact path="/home" component={HomeComponent}></Route>
    //         <Route exact path="/addVehicle" component={AddVehicle}></Route>
    //         <Route exact path="/allSearch" component={AllVehicle}></Route>
    //       </Switch>
    //     </Router>
    //   </Container>
    // );
  }
}

export default Content;
