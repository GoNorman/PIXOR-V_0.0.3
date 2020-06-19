/* eslint-disable array-callback-return */
import { toJson } from "unsplash-js";
import { unsplash } from "../api/unsplash";

let next_id = 0;
let page = 1;
export const show_photos = () => (dispatch) => {
  unsplash.photos
    .listPhotos(page++, 10)
    .then(toJson)
    .then((json) => {
        json.map(ev_json => {
            dispatch({
              type: "SHOW_PHOTO",
              id: next_id++,
              payload: ev_json,
            });
        })
    });
};

export const like_photo = id => {
    unsplash.photos
      .likePhoto("mtNweauBsMQ")
      .then(toJson)
      .then((json) => {
        console.log(json)
      });
}