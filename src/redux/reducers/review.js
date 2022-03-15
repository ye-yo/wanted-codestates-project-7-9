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
  options: {},
  details: [],
};
export default function review(state = initialState, action = {}) {
  switch (action.type) {
    case SET_REVIEWS: {
      const newDatas = action.options.isInit ? action.payload
        : [...state.reviews, ...action.payload];
      return {
        options: action.options,
        reviews: newDatas.reduce((acc, current) => {
          if (acc.findIndex(({ id }) => id === current.id) === -1) {
            acc.push(current);
          }
          return acc;
        }, []),
      };
    }
    case REFRESH_REVIEWS:
      return {
        ...state,
        reviews: [],
      };
    case ADD_REVIEW: {
      return {
        ...state,
        reviews: [action.payload, ...state.reviews],
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
        options: { ...state.options, sort: action.payload },
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
