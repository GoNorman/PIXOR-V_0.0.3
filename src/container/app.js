/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React, { Component } from "react";
import "../style/style.css";
import Auth from "../component/auth";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Exa from '../example_auth';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route path='/' component={Auth}/>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
