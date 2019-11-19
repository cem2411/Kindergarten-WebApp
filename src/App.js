import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/navbar/Navigation";
import { Eattendance } from "./components/submenu/educator/Eattendance";
import { Pattendance } from "./components/submenu/parent/Pattendance";
import { Info } from "./components/submenu/info/Info";
import { Footer } from "./components/footer/Footer";
import { Login } from "./components/login/Login";
import Register from "./components/login/Register";
import Test from './test/test';

//import LogReg_Connector from "./components/login/connector/LogReg_Connector";


class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
        <div className="container">
          <header>
            <Navigation />
          </header>
          {/* <LogReg_Connector/> */}
          <Login></Login>
          

          <Switch>
          <Route path="/test" component={Test} />
            <Route path="/Eattendance" component={Eattendance} />
            <Route path="/Pattendance" component={Pattendance} />
            <Route path="/Info" component={Info} />
          </Switch>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
  




  
}



export default App;
