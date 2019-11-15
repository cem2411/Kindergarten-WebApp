import Recact from 'react'
import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Navbar} from './components/navbar/Navbar'
import {Eattendance} from './components/submenu/educator/Eattendance'
import {Pattendance} from './components/submenu/parent/Pattendance'


import Button from 'react-bootstrap/Button'
import { format } from 'path'

class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="container">
    <h1>Home</h1>
    <Switch>
      <Route path='/Eattendance' component= {Eattendance}/>
      <Route path='/Pattendance' component= {Pattendance}/>
      </Switch>
  
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
