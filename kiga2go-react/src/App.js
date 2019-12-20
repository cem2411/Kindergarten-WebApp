import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import background from "./img/background/background.jpg";
import Navigation from "./components/navbar/Navigation";
import { Pabsence } from "./pages/parent-view/absence/Pabsence";
import { Info } from "./pages/common-view/info/Info";
import { Footer } from "./components/footer/Footer";
import LoginForm from "./components/forms/login/LoginForm";
import RegisterForm from "./components/forms/register/RegisterForm";
import { ListChildren } from "./pages/admin-view/listChildren/ListChildren";
import { Aabsence } from "./pages/admin-view/listAbsence/Aabsence";
import Home from "./pages/home-view/Home";
import AbsenceForm from "./components/forms/absence/AbsenceForm";
import { UserProvider } from "./context/user-context";
import "./style.scss";

export default function App() {
  const [user, setUser] = useState();

  return (
    <UserProvider value={user}>
      <BrowserRouter>
        <div className="main-container">
          <header>
            <Navigation />
          </header>

          <div className="page-content">
            {user ? (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Info" component={Info} />
                <Route path="/Absence" component={AbsenceForm} />
                {user.role === "admin" ? (
                  <Route path="/ListChildren" component={ListChildren} />
                ) : (
                  <div />
                )}
                {user.role === "admin" ? (
                  <Route path="/ListAbsence" component={Aabsence} />
                ) : (
                  <div />
                )}
                {user.role === "admin" ? (
                  <Route exact path="/AddChild" component={RegisterForm} />
                ) : (
                  <div />
                )}
              </Switch>
            ) : (
              <LoginForm setUser={setUser} />
            )}
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}
