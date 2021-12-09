import { LoginTypes, AuthTypes, LiveSearch } from "./types";

interface IUserDATA {
  company_name: string;
  email: string;
  id: string;
  message: string;
  messagesss: string;
  successfuly_signedin: boolean;
  token: string;
}

interface IinitialState {
  has_pending_changes: boolean;
  email: null | string;
  password: null | string;
  submitting: boolean;
  submitted: boolean;
  login_success: boolean;
  user_data: {};
}
const INITIAL_STATE: IinitialState = {
  has_pending_changes: false,
  email: null,
  password: null,
  submitting: false,
  submitted: false,
  login_success: false,
  user_data: {
    company_name: "",
    email: "",
    id: "",
    message: "",
    messagesss: "",
    successfuly_signedin: false,
    token: "",
  },
};

const loginReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  const field = payload?.name ? payload.name : "";
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
        user_data: {
          ...state.user_data,
          ...payload,
        },
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
