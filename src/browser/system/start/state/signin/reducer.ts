import { LoginTypes, AuthTypes, LiveSearch } from "./types";

interface IinitialState {
  is_authenticated: boolean;
  done_checking_auth: boolean;
  has_pending_changes: boolean;
  email: null | string;
  password: null | string;
  submitting: boolean;
  submitted: boolean;
  login_success: boolean;
}
const INITIAL_STATE: IinitialState = {
  is_authenticated: false,
  done_checking_auth: false,
  has_pending_changes: false,
  email: null,
  password: null,
  submitting: false,
  submitted: false,
  login_success: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  const field = payload?.name ? payload.name : ""
  console.log("payload:", action.payload )
  switch (action.type) {
    case LoginTypes.LOGIN_FIELD_CHANGE:
      return {
        ...state,
        ...payload,
        // has_pending_changes: payload && payload.name && payload[field] ? true : false
      };
      case LoginTypes.HAS_PENDING_CHANGES:
        return {
          ...state,
          ...payload,
        };
    case LoginTypes.LOGIN_USER_START:
      return {
        ...state,
        submitting: true,
      };
    case LoginTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };
    case LiveSearch.SEARCH:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
