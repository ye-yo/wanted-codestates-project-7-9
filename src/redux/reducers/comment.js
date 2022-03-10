import {
  COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from '../actions/types';

const initialState = {
  comments: [],
};
export default function COMMENT(state = initialState, action = null) {
  switch (action.type) {
    case COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map((prev) => (
          prev.commentId === action.payload.commentId ? action.payload : prev
        )),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.commentId !== action.payload,
        ),
      };
    default:
      return state;
  }
}
