import Recact from 'react'
import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Navbar} from './components/navbar/Navbar'

import Button from 'react-bootstrap/Button'

class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="container">
    <Switch>
      <Route path='/navbar' component={Navbar}/>

    </Switch>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
