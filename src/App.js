import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Login } from "./components/Login";
import Menu from './menu/Menu';
import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem('isLoggedIn')){
      localStorage.setItem('isLoggedIn', false);
    }
    localStorage.setItem('username', 'santiago');
    localStorage.setItem('password', 'admin');
  }

  render() {
    const LoginView = () => (
        <Login/>
    );

    return (
      <div>
        <Router>
          <Route path="/home" >
            <Menu/>
          </Route>
          <div className="App">
              <Route exact path="/">
                {JSON.parse(localStorage.getItem("isLoggedIn")) ? <Redirect to="/home" /> : 
                <Login />}
              </Route>
          </div>
        </Router>
      </div>
    );
  }

}

export default App;