import Unsplash from "unsplash-js";

export const unsplash = new Unsplash({
  accessKey: "BuAonTad568ti9Ll_pej7NtY0Ma2dYpyUFDe3m3O9YQ",
  secret: "6tkkmZuTdT3SG-5FGaI85VOvhZwzu8fUfWLUmdIbWH4",
  callbackUrl: "http://localhost:3000/home",
  headers: {
    "Accept-Version": "v1",
  },
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "read_user",
  "write_user",
  "read_photos",
  "write_photos",
]);

export const test = (code) => {
  unsplash.auth
    .userAuthentication(code)
    .then((res) => res.json())
    .then((json) => localStorage.setItem("token", json.access_token));
};

let page = 0;

export const test1 = (token) => {
  unsplash.auth.setBearerToken(token);
  return unsplash.photos.listPhotos(++page, 10, "").then((res) => res.json());
};
