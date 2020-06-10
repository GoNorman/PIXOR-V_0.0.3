const reducer = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_PHOTO':
        return [...state, { id: action.id, photo: action.payload}];
      case 'LIKE_PHOTO':
        return state
      default:
        return state;
    }
}

export default reducer;