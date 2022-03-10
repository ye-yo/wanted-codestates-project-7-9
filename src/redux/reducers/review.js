import {
  REVIEWS,
  ADD_REVIEW,
  LIKE_REVIEW,
  UNLIKE_REVIEW,
  SET_SORT_OPTION,
} from '../actions/types';

const initialState = {
  reviews: [],
  sortOption: null,
};
export default function review(state = initialState, action = {}) {
  switch (action.type) {
    case REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ADD_REVIEW: {
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    }
    case LIKE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map((data) => (
          data.postNumber === action.payload
            ? { ...data, likes: data.likes + 1 }
            : data
        )),
      };
    case UNLIKE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map((data) => (
          data.postNumber === action.payload
            ? { ...data, likes: data.likes - 1 }
            : data
        )),
      };
    case SET_SORT_OPTION:
      return {
        ...state,
        sortOption: action.payload,
      };
    default:
      return state;
  }
}
