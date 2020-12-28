import {SIGN_IN, SIGN_OUT} from "./types";

const initialState = {
  email: '',
  isSignIn: null,
};
function authorizationReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignIn: true,
        email: action.email,
      };
    case SIGN_OUT:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}

export default authorizationReducer;
