import React, { Component} from 'react';
import './App.css'
import {Route, BrowserRouter} from 'react-router-dom'
import Signin from './components/Views/Signin'
import Signup from './components/Views/Signup'
import NavBar from './components/NavBar'
import Message from './components/Views/Message'
import Chat from './components/Views/chat/Chat'
import Contacts from './components/Views/contacts/Contacts'
import cors from 'cors'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        {/* <NavBar/> */}
        {/* <Route path='/'>
          <Message2/>
        </Route> */}
        

        <Route path = "/signup" >
          <Signup/>
        </Route>

        <Route path = "/signin" >
          <Signin/>
        </Route>

        <Route path = "/message">
          <Chat/>
        </Route>


      </BrowserRouter>
     
    )
  }
}

export default App;
