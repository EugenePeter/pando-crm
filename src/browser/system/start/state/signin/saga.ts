import { takeLatest, put, call, select } from "redux-saga/effects";
import { LoginTypes } from "./types";
import {login} from './api'
import { LoginUserActionSuccess, UpdateLoginHasPendingChange } from "./actions";

export const checkIfLoginFieldsHasValue = function* () {
  const {email = '', password = ''} = yield select((state) => state.loginReducer || {})
  yield email && password ? put(UpdateLoginHasPendingChange({has_pending_changes: true})) : put(UpdateLoginHasPendingChange({has_pending_changes: false}))
  yield console.log("SELECTOR:", `email : ${email} password: ${password}`)
};

export const handleLoginFieldChange = function* () {
  yield takeLatest(LoginTypes.LOGIN_FIELD_CHANGE, checkIfLoginFieldsHasValue )
}

export const loginSaga = function* () {
  yield call(handleLoginFieldChange)
}

const loginSubmitAsync = function* (value) {
  const {email = '', password = ''} = yield select((state) => state.loginReducer || {})
  console.log("LOGIN SUBMIT VALUE:" , value)
  try {
    const response = yield login({email, password})
    const {token, successfuly_signedin} = response
    yield token && successfuly_signedin && put(LoginUserActionSuccess(response))
    console.log('LOGIN RESPONSE:', successfuly_signedin)
  } catch(error) {}
}

const loginSubmitStart = function* () {
  yield takeLatest(LoginTypes.LOGIN_USER_START, loginSubmitAsync)
}

export const loginSubmitSaga = function* () {
  yield call(loginSubmitStart)
}
