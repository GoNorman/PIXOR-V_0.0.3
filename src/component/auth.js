/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React, { Component } from "react";
import HomePage from "../component/home_page";
import { Route, BrowserRouter, Link, Switch, Redirect } from "react-router-dom";
import Exa from "../example_auth";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      link : "/home_page"
    };
    this.on_home_page = this.on_home_page.bind(this);
  }
  on_home_page() {
    this.setState({
      home: true,
    });
  }
  render = () => {
    if(!this.state.home){
      return (
        <div>
          <br />
          <Link to="/home_page" className="link" onClick={this.on_home_page}>Unsplash</Link>
          <br />
        </div>
      );
    } else {
      return (
        <Switch>
          <Route path="/home_page" component={Exa} />
          <Redirect from="/" to="/home_page"/>
        </Switch>
      );
    }
  }
}

export default Auth;
