/* eslint-disable no-unused-vars */
import { START_FETCHING, SUCCESS, FAILED } from "./Constants";

const INITIAL_STATE = {
  todo: null,
  loading: false,
  error: null,
  initialRender: true,
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        loading: true,
        initialRender: false,
        error: null,
        todo: null,
      };
    case SUCCESS:
      return {
        ...state,
        todo: action.payload.data,
        loading: false,
        initialRender: false,
        error: null,
      };
    case FAILED:
      return {
        ...state,
        loading: false,
        initialRender: false,
        error: action.payload.error,
        todo: null,
      };
    default:
      return state;
  }
};

export default todoReducer;
