/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps } from '../connect(redux)/to_props';

class OpenPhoto extends React.Component {
    render() {
        const { photo } = this.props;
    return (
      <div>
        <NavLink to="/home">BACK</NavLink>
        {photo.map(ev => {
            if(ev.id == this.props.match.params.id){
                return (
                <React.Fragment>
                    <p className="big_img"><img src={ev.photo.urls.regular} alt=''/></p>
                </React.Fragment>)
            } 
        })}
      </div>
    );
  }
}

OpenPhoto = connect(mapStateToProps)(OpenPhoto);

export default OpenPhoto;