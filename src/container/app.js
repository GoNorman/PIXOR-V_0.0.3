import React, { Component } from 'react';
import { mapDispatchToProps } from '../connect(redux)/to_props';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import HomePage from '../component/home_page';
import Auth from '../component/auth';
import OpenPhoto from '../component/open_photo';
import { mapStateToProps } from '../connect(redux)/to_props';

class App extends Component {
    componentDidMount(){
        this.props.show_photos()
        //debugger;
    }
    render() {
    const { photo, show_photos, like_photo } = this.props;
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <NavLink to="/auth">AUTH</NavLink>
            </Route>
            <Route path="/auth" component={Auth} />
            <Route path="/home">
                <HomePage photo={photo} show_photos={show_photos} like_photo={like_photo}/>
            </Route>
            <Route path="/open/:id" component={OpenPhoto}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;