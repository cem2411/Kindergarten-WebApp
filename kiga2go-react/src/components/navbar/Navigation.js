import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import UserContext from "../../context/user-context";
import logo from "../../img/logo/logo.png";
import "./style.scss";

export default function Navigation() {
  const user = useContext(UserContext);

  return (
    <Navbar className="MyNavbar" collapseOnSelect expand="lg" variant="light">
      <Navbar.Brand className="MyNavbar__brand" href="/">
        <img src={logo} alt="kiga2go" height="115" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {user ? (
        <Navbar.Collapse id="responsive-navbar-nav">
          {user.role === "admin" ? (
            <Nav>
              <LinkContainer className="MyNavbar__link" to="/AddChild">
                <Nav.Link>Konto hinzufügen</Nav.Link>
              </LinkContainer>
              <LinkContainer className="MyNavbar__link" to="/ListChildren">
                <Nav.Link>Kinderliste</Nav.Link>
              </LinkContainer>
              <LinkContainer className="MyNavbar__link" to="/ListAbsence">
                <Nav.Link>Krankmeldung</Nav.Link>
              </LinkContainer>
              <LinkContainer className="MyNavbar__link" to="/Info">
                <Nav.Link>Info</Nav.Link>
              </LinkContainer>
            </Nav>
          ) : (
            <Nav>
              <LinkContainer className="MyNavbar__link" to="/Absence">
                <Nav.Link>Krankmeldung</Nav.Link>
              </LinkContainer>
              <LinkContainer className="MyNavbar__link" to="/Info">
                <Nav.Link>Info</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      ) : (
        <div />
      )}
    </Navbar>
  );
}
