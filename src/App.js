import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/navbar/Navigation";
import { Eattendance } from "./components/submenu/absence/educator/Eattendance";
import { Pattendance } from "./components/submenu/absence/parent/Pattendance";
import { Info } from "./components/submenu/info/Info";
import { Footer } from "./components/footer/Footer";
import { Login } from "./components/login/Login";

import "./style.scss";
import { AddChild } from "./components/submenu/addChild/AddChild";
import { ListChild } from "./components/submenu/listChild/ListChild";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <header>
            <Navigation />
          </header>

          <Switch>
            <Route path="/Eattendance" component={Eattendance} />
            <Route path="/Pattendance" component={Pattendance} />
            <Route path="/Info" component={Info} />
            <Route path="/Login" component={Login} />
            <Route path="/AddChild" component={AddChild} />
            <Route path="ListChild" component={ListChild} />
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
