import Unsplash, { toJson, query } from "unsplash-js";


const unsplash = new Unsplash({
  accessKey: "BuAonTad568ti9Ll_pej7NtY0Ma2dYpyUFDe3m3O9YQ",
  secret: "6tkkmZuTdT3SG-5FGaI85VOvhZwzu8fUfWLUmdIbWH4",
  callbackUrl: "urn::wg:oauth:2.0:oob",
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos",
]);

window.location.assign(authenticationUrl);

const total = () => dispatch => {
    unsplash.auth
  .userAuthentication(query.code)
  .then(toJson)
  .then((json) => {
    unsplash.auth.setBearerToken(json.access_token);
  });

}

export default total();


//   unsplash.stats
//     .total()
//     .then(toJson)
//     .then((json) => {
//       console.log(json);
//     });