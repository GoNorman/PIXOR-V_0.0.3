/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { show_photos, like_photo } from "../action/action";
import { connect } from "react-redux";
import Image from "../component/image";

class HomePage extends Component{
    constructor(props){
        super(props);
        this.props.on_show_photos();
    }
    render(){
        const { list, on_show_photos, on_like_photo } = this.props;
        return (
          <React.Fragment>
            <Image list={list} on_show_photos={on_show_photos} on_like_photo={on_like_photo} />
          </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => {
  return {
    list: state,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    on_show_photos: () => dispath(show_photos()),
    on_like_photo: () => dispath(like_photo()),
  };
};

HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePage;