import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/navbar/Navigation";
import { Eattendance } from "./components/submenu/educator/Eattendance";
import { Pattendance } from "./components/submenu/parent/Pattendance";
//import { Footer } from "./components/submenu/footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <header> 
  <Navigation/>
</header>
          <Switch>            
            <Route path="/Eattendance" component={Eattendance}/>
            <Route path="/Pattendance" component={Pattendance}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
