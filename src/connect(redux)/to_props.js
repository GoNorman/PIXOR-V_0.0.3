import { show_photos, like_photo } from '../action/index';

export const mapStateToProps = (state) => {
  return {
    photo: state,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    show_photos: () => dispatch(show_photos()),
    like_photo: (id) => dispatch(like_photo(id))
  };
};
