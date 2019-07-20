import * as types from './types';

export function onInputChange(e) {
  return {
    type: types.LOGIN_INPUT_CHANGE,
    name: e.target.name,
    value: e.target.value
  }
}

export function onLoginLoading() {
  return {
    type: types.LOGIN_FORM_LOADING
  }
}

export function onLoginError(error) {
  return {
    type: types.LOGIN_FORM_ERROR,
    error
  }
}

export function onLoginSuccess() {
  return {
    type: types.LOGIN_FORM_SUCCESS
  }
}
