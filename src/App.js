import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Login } from "./components/Login";
import { TodoApp } from "./components/TodoApp"
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
  
    const TodoAppView = () => (
        <TodoApp/>
    );

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">TODO React App</h1>
          </header>

          <br/>
          <br/>

          <ul>
            {/* <li><Link to="/">Login</Link></li>
            <li><Link to="/todo">Todo</Link></li> */}
          </ul>

          <div>
            <Route exact path="/">
              {JSON.parse(localStorage.getItem("isLoggedIn")) ? <Redirect to="/todo" /> : 
              <Login />}
            </Route>
            {/* {!JSON.parse(localStorage.getItem("isLoggedIn")) && <Route exact path="/" component={LoginView}/>}
            {JSON.parse(localStorage.getItem("isLoggedIn")) && <Route path="/todo" component={TodoAppView}/>} */}
          </div>
        </div>
      </Router>
    );
  }

}

export default App;