import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import background from "./img/background/background.jpg";
import { Navigation } from "./components/navbar/Navigation";
import { Pabsence } from "./pages/parent-view/absence/Pabsence";
import { Info } from "./pages/common-view/info/Info";
import { Footer } from "./components/footer/Footer";
import LoginForm from "./components/forms/login/LoginForm";
import RegisterForm from "./components/forms/register/RegisterForm";
import { ListChildren } from "./pages/admin-view/listChildren/ListChildren";
import { Aabsence } from "./pages/admin-view/listAbsence/Aabsence";
import AbsenceForm from "./components/forms/absence/AbsenceForm";
import { UserProvider } from "./context/user-context";
import "./style.scss";

export default function App() {
  const [user, setUser] = useState();

  const validateUser = ({ email, password }) => {
    console.log(email);
    console.log(password);
  };

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
                <Route path="/ListChildren" component={ListChildren} />
                <Route path="/Info" component={Info} />
                <Route path="/Absence" component={AbsenceForm} />
                <Route path="/ListAbsence" component={Aabsence} />
                <Route exact path="/AddChild" component={RegisterForm} />
              </Switch>
            ) : (
              <LoginForm onSubmit={validateUser} />
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
