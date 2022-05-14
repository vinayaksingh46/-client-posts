
import {CREATE,UPDATE,FETCH_ALL,DELETE,LIKE} from "../constants/actionTypes"

const reducers = (postsState = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...postsState, action.payload];
    case UPDATE:
      return postsState.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return postsState.filter((post) => post._id !== action.payload);
    case LIKE:
        return postsState.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    default:
      return postsState;
  }
};

export default reducers;
