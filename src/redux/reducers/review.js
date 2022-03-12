import {
  SET_REVIEWS,
  REFRESH_REVIEWS,
  ADD_REVIEW,
  LIKE_REVIEW,
  UNLIKE_REVIEW,
  SET_SORT_OPTION,
  DETAIL_REVIEW,
  DETAIL_ADD_COMMENT,
} from '../actions/types';

const initialState = {
  reviews: [],
  sortOption: null,
  details: [],
};
export default function review(state = initialState, action = {}) {
  switch (action.type) {
    case SET_REVIEWS:
      return {
        ...state,
        reviews: [...state.reviews, ...action.payload].reduce(
          (acc, current) => {
            if (acc.findIndex(({ id }) => id === current.id) === -1) {
              acc.push(current);
            }
            return acc;
          },
          [],
        ),
      };
    case REFRESH_REVIEWS:
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
        reviews: state.reviews.map((data) => (data.postNumber === action.payload
          ? { ...data, likes: data.likes + 1 }
          : data)),
      };
    case UNLIKE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map((data) => (data.postNumber === action.payload
          ? { ...data, likes: data.likes - 1 }
          : data)),
      };
    case SET_SORT_OPTION:
      return {
        ...state,
        sortOption: action.payload,
      };
    case DETAIL_REVIEW:
      return {
        ...state,
        details: action.payload,
      };
    case DETAIL_ADD_COMMENT:
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
}
