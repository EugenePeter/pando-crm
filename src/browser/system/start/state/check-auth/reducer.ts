import { AuthTypes } from "./types";

const INITIAL_STATE = {
  is_authenticated: false,
  done_checking_auth: false,
};

const checkAuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.CHECK_AUTH_START:
      return {
        ...state,
        done_checking_auth: false,
      };
    case AuthTypes.CHECK_AUTH_SUCCESS:
      return {
        ...state,
        is_authenticated: action.payload,
        done_checking_auth: true,
      };
    case AuthTypes.UNAUTHORIZED_USER:
      return {
        ...state,
        is_authenticated: action.payload,
        done_checking_auth: true,
      };
    default:
      return state;
  }
};

export default checkAuthReducer;
