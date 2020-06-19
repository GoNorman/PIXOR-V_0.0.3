import React from 'react';
import { NavLink } from 'react-router-dom';
import like from '../img/like.png';

const HomePage = props =>{
    const { photo, show_photos, like_photo} = props;
    return (
      <React.Fragment>
          {photo.map((ev, i) => {
              console.log(ev)
            return (
              <div className="photo">
                <NavLink to={`/open/${ev.id}`}>
                  <img key={i} src={ev.photo.urls.small} alt="" />
                </NavLink>
                <div className="description">
                  <div className="description_left">
                  <a className='link' href={ev.photo.links.html}>{ev.photo.user.name}</a>
                  </div>
                  <div className="description_right">
                    <p>{ev.photo.likes}</p>
                    <img className="like_img" alt='' src={like}/>
                  </div>
                </div>
              </div>
            );
          })}
        <p className='more' onClick={show_photos}>MORE</p>
        <button onClick={like_photo}>like</button>
      </React.Fragment>
    );
}

export default HomePage;