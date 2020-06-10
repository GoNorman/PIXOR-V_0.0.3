import React, { Component } from "react";
import Unsplash, { toJson, query } from "unsplash-js";
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './component/home_page';

const unsplash = new Unsplash({
  accessKey: "BuAonTad568ti9Ll_pej7NtY0Ma2dYpyUFDe3m3O9YQ",
  secret: "6tkkmZuTdT3SG-5FGaI85VOvhZwzu8fUfWLUmdIbWH4",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob",
  headers: {
    "Accept-Version": "v1",
  },
});

class Exa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      "public",
      "read_user",
      "write_user",
      "read_photos",
      "write_photos",
    ]);
    window.location.assign(authenticationUrl);
    unsplash.auth
      .userAuthentication(query.code)
      .then(toJson)
      .then((json) => {
        console.log(json.access_token);
        unsplash.auth.setBearerToken(json.access_token);
      })
      .catch((err) => console.log("Auth err", err));
  }

  handleClick() {
    this.setState({
      redirect: true,
    });
    unsplash.search
      .photos(query, 1) //function provided by api
      .then(toJson)
      .then((json) => {
        console.log(json);
      });
  }

  render = () => (
    <Switch>
      <Route path="/home" component={HomePage}/>
    </Switch>
  );
}

export default Exa;
