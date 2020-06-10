/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable array-callback-return */
import Unsplash, { toJson, query } from "unsplash-js";
let next_id = 0;

const unsplash = new Unsplash({
  accessKey: "BuAonTad568ti9Ll_pej7NtY0Ma2dYpyUFDe3m3O9YQ",
  secret: "6tkkmZuTdT3SG-5FGaI85VOvhZwzu8fUfWLUmdIbWH4",
  callbackUrl: "urn:ietf:wg:oauth:2.0:oob",
});

let page = 1;
export const show_photos = () => (dispatch) => {
  unsplash.photos
    .listPhotos(page++, 10)
    .then(toJson)
    .then((json) => {
      console.log(json); //JSON array of object
      let data_user = json.map((ev) => {
        return {
          img: ev.urls.small, //thumb
          user: ev.user.username,
          like: ev.likes,
          profile: ev.links.html,
          img_profile: ev.user.profile_image.small,
          id: ++next_id,
        };
      });
      dispatch({
        type: "SHOW_PHOTO",
        id: next_id++,
        payload: data_user,
      });
    });
};

export const like_photo = () => (dispatch) => {
  unsplash.photos
    .likePhoto("O9m5k3_-iAs")
    .then(toJson)
    .then((json) => {
      console.log(json);
      dispatch({
        type: "LIKE_PHOTO",
        payload: json,
      });
    });
};