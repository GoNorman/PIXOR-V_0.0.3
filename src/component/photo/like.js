/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React from "react";
import like_logo from './img/icons8-heart-50.png'

const Like = (props) => {
  return (
    <React.Fragment>
      <img className="like" src={like_logo} />
      <p>{props.like}</p>
    </React.Fragment>
  );
};

export default Like;
