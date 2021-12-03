import { AuthTypes, LoginTypes, LiveSearch, checkAuthSuccessType } from "./types";

export const HandleLoginFieldChange = (value) => ({
  type: LoginTypes.LOGIN_FIELD_CHANGE,
  payload: value,
});

export const LoginUserActionStart = () => ({ type: LoginTypes.LOGIN_USER_START });

export const LoginUserActionSuccess = (value) => ({
  type: LoginTypes.LOGIN_USER_SUCCESS,
  payload: value,
});

export const TestLiveSearch = (value) => ({
  type: LiveSearch.SEARCH,
  payload: value,
});
