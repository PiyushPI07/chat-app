import React, { Component} from 'react';
import './App.css'
import {Route, BrowserRouter} from 'react-router-dom'
import Signin from './components/Views/Signin'
import Signup from './components/Views/Signup'
import NavBar from './components/NavBar'
import Chat from './components/Views/chat/Chat'
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();





class App extends Component {
  render(){
    return(
      <Provider store = {store}>
        <BrowserRouter>
          <NavBar/>

          <Route path="/signin" >
            <Signin />
          </Route>


          <Route path="/signup" >
            <Signup />
          </Route>


          <Route path="/message">
            <Chat />
          </Route>


        </BrowserRouter>
      </Provider>
           
    )
  }
}

export default App;
