 import React, { Component } from 'react'
 import {Nav, Navbar} from 'react-bootstrap';

  export  class Navigation extends Component {
     render() {
         return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">kiga2go</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              
              <Nav className="mr-auto">
                <Nav.Link href="/Eattendance">Eattendance</Nav.Link>
                <Nav.Link href="/Pattendance">Pattendance</Nav.Link>                
              </Nav>

              <Nav>
                <Nav.Link href="/">PROFIL</Nav.Link>      
              </Nav>

            </Navbar.Collapse>
          </Navbar>
         )
     }
 }
 
 
