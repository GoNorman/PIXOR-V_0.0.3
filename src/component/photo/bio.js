/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React from 'react';

const Bio = (props) => {
    return (
      <div className="bio">
        <a className="link_profile" href={props.profile}>
          <p>{props.user}</p>{" "}
          <img className="img_profile" src={props.img_profile} />
        </a>
      </div>
    );
}

export default Bio;