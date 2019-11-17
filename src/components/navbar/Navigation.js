 import React, { Component } from 'react';
 import {Nav, Navbar} from 'react-bootstrap';
 import { NavLink } from 'react-router-dom';
 import './style.scss';

  export  class Navigation extends Component {
     render() {
         return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="hello1" >
            <Navbar.Brand href="/">kiga2go</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              
              <Nav>
                <NavLink to="/Eattendance" activeClassName="hello">Employee Attendence</NavLink>
                <NavLink to="/Pattendance">Parents Attendence</NavLink>
                <NavLink to="/Info">Info</NavLink>              
              </Nav>

              <Nav>
                <Nav.Link href="/">PROFIL</Nav.Link>      
              </Nav>

            </Navbar.Collapse>
          </Navbar>
         )
     }
 }
 
 
