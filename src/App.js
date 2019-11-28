import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./style.scss";
import background from "./img/background/background.jpg";

import { Navigation } from "./components/navbar/Navigation";
import { Pattendance } from "./pages/parent-view/absence/Pattendance";
import { Info } from "./pages/common-view/info/Info";
import { Footer } from "./components/footer/Footer";
import { LoginForm } from "./components/forms/login/LoginForm";
import RegisterForm from "./components/forms/register/RegisterForm";
import { ListChildren } from "./pages/admin-view/listChildren/ListChildren";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-container">
          <header>
            <Navigation />
          </header>

          <div className="page-content">
            <Switch>
              <Route path="/Pattendance" component={Pattendance} />
              <Route path="/Info" component={Info} />
              <Route path="/Login" component={LoginForm} />
              <Route exact path="/AddChild" component={RegisterForm} />
              <Route path="/ListChild" component={ListChildren} />
            </Switch>
          </div>

          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
