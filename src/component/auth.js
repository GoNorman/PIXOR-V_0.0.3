import React, { Component } from "react";
import { authenticationUrl } from "../api/unsplash";

class Auth extends Component {
  componentDidMount() {
    window.location.assign(authenticationUrl);
  }
  render() {
    return <React.Fragment />;
  }
}

export default Auth;
