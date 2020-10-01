import React, { Component } from "react";
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./Componants/Navbar";
//pages
import home from "./Pages/home";
import signin from "./Pages/signin";
import signup from "./Pages/signup";
import contactus from "./Pages/contactus";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/signin" component={signin} />
              <Route exact path="/signup" component={signup} />
              <Route exact path="/contactus" component={contactus} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
