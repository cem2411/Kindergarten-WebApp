import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import background from "./img/background/background.jpg";
import Navigation from "./components/navbar/Navigation";
import { Info } from "./pages/common-view/info/Info";
import { Footer } from "./components/footer/Footer";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";
import ListChildren from "./pages/admin-view/listChildren/ListChildren";
import ListAabsence from "./pages/admin-view/listAbsence/ListAabsence";
import Pabsence from "./pages/parent-view/absence/Pabsence";
import Home from "./pages/home-view/Home";
import { UserProvider } from "./context/user-context";
import "./style.scss";

export default function App() {
  const [user, setUser] = useState();

  return (
    <UserProvider value={user}>
      <BrowserRouter>
        <div className="main-container">
          <header>
            <Navigation onLogout={() => setUser()} />
          </header>

          <div className="page-content">
            {user ? (
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Info" component={Info} />
                <Route path="/Absence" component={Pabsence} />
                {user.role === "admin" ? (
                  <Route path="/ListChildren" component={ListChildren} />
                ) : (
                  <div />
                )}
                {user.role === "admin" ? (
                  <Route path="/ListAbsence" component={ListAabsence} />
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
