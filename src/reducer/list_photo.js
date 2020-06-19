/* eslint-disable array-callback-return */
export const list = (state = [], action) => {
  switch (action.type) {
    case "SHOW_PHOTO":
      return [...state, { id: action.id, photo: action.payload }];
    case "OPEN":
      //alert(`${action.type}  ${action.info}`)
      return [...state, {info : action.info}]
    default:
      return state;
  }
};
