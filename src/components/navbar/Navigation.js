import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./style.scss";
import logo from "../../img/logo/logo.png";

export class Navigation extends Component {
  render() {
    return (
      <Navbar className="MyNavbar" collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand className="MyNavbar__brand" href="/">
          <img src={logo} alt="kiga2go" height="115" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <LinkContainer className="MyNavbar__link" to="/Eattendance">
              <Nav.Link>Employee Attendence</Nav.Link>
            </LinkContainer>
            <LinkContainer className="MyNavbar__link" to="/Pattendance">
              <Nav.Link>Parents Attendence</Nav.Link>
            </LinkContainer>
            <LinkContainer className="MyNavbar__link" to="/Info">
              <Nav.Link>Info</Nav.Link>
            </LinkContainer>
            <LinkContainer className="MyNavbar__link" to="/Login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer className="MyNavbar__link" to="/AddChild">
              <Nav.Link>Eltern hinzufügen</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
