/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import React, { Component } from "react";
import Bio from "./photo/bio";
import Like from "./photo/like";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open_photo: false,
    };
    this.on_open_photo = this.on_open_photo.bind(this);
  }
  on_open_photo() {
    this.setState({
      open_photo: true,
    });
  }
  render() {
    const { list, on_show_photos, on_like_photo } = this.props;
    return (
      <React.Fragment>
        <div className="all_photo">
          {list.map((ev) =>
            ev.photo.map((ev, index) => {
              return (
                <div className="photo" key={index}>
                  <img src={ev.img} onClick={this.on_open_photo} />
                  <div className="description">
                    <Bio profile={ev.profile} user={ev.user} img_profile={ev.img_profile} />
                    <div className="description_like">
                      <Like like={ev.like} />
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <a className="link" onClick={on_show_photos}>
            MORE
          </a>
          {/* <button onClick={on_like_photo}>LIKE</button> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Photo;
