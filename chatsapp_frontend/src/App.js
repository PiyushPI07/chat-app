import React, { Component} from 'react';
import './App.css'
import {Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Views/Home'
import Signin from './components/Views/Signin'
import Signup from './components/Views/Signup'
import NavBar from './components/NavBar'
import Message from './components/Views/message'
import cors from 'cors'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <NavBar/>

        <Route path = "/signup" >
          <Signup/>
        </Route>

        <Route path = "/signin" >
          <Signin/>
        </Route>

        <Route path = "/message">
          <Message/>
        </Route>

      </BrowserRouter>
     
    )
  }
}

export default App;
