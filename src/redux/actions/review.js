import {
  SET_REVIEWS,
  REFRESH_REVIEWS,
  ADD_REVIEW,
  LIKE_REVIEW,
  UNLIKE_REVIEW,
  SET_SORT_OPTION,
} from './types';

export const setReviews = (datas) => ({
  type: SET_REVIEWS,
  payload: datas,
});

export const refreshReviews = (datas) => ({
  type: REFRESH_REVIEWS,
  payload: datas,
});

export const addReview = (review) => ({
  type: ADD_REVIEW,
  payload: review,
});

export const likeReview = (postNumber) => ({
  type: LIKE_REVIEW,
  payload: postNumber,
});

export const unlikeReview = (postNumber) => ({
  type: UNLIKE_REVIEW,
  payload: postNumber,
});

export const setSortOption = (sortOption) => ({
  type: SET_SORT_OPTION,
  payload: sortOption,
});
