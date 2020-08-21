import React from 'react';
import './App.css';
import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import New from "./components/new.component";
import Edit from "./components/edit.component";
import List from "./components/list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">New</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={List} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/new" component={New} />
        </div>
      </Router>
    );
  }
}

export default App;