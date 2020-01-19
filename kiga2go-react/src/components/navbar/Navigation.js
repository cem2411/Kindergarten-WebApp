import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../../context/user-context";
import logo from "../../img/logo/logo.png";
import "./style.scss";

export default function Navigation({ onLogout }) {
  const user = useContext(UserContext);

  return (
    <Navbar className="MyNavbar" collapseOnSelect expand="lg" variant="light">
      <Navbar.Brand as={Link} to="/">
        <img
          className="MyNavbar__brand"
          src={logo}
          alt="kiga2go"
          height="115"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {user ? (
        <Navbar.Collapse id="responsive-navbar-nav">
          {user.role === "admin" ? (
            <Nav>
              <LinkContainer className="MyNavbar__link" to="/dashboard">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer className="MyNavbar__link" to="/addChild">
                <Nav.Link>Konto hinzufügen</Nav.Link>
              </LinkContainer>
              <LinkContainer className="MyNavbar__link" to="/listChildren">
                <Nav.Link>Kinderliste</Nav.Link>
              </LinkContainer>
              <LinkContainer className="MyNavbar__link" to="/listAbsence">
                <Nav.Link>Krankmeldung</Nav.Link>
              </LinkContainer>
              <LinkContainer className="MyNavbar__link" to="/info">
                <Nav.Link>Info</Nav.Link>
              </LinkContainer>
            </Nav>
          ) : (
            <Nav>
              <LinkContainer className="MyNavbar__link" to="/dashboard">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer className="MyNavbar__link" to="/absence">
                <Nav.Link>Krankmeldung</Nav.Link>
              </LinkContainer>
              <LinkContainer className="MyNavbar__link" to="/info">
                <Nav.Link>Info</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
          <LinkContainer className="logout" to="/">
            <Nav.Link>
              <button onClick={onLogout}>Logout</button>
            </Nav.Link>
          </LinkContainer>
        </Navbar.Collapse>
      ) : (
        <div />
      )}
    </Navbar>
  );
}
