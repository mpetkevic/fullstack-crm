import * as types from './types';

export function onInputChange(e) {
  return {
    type: types.REGISTER_INPUT_CHANGE,
    name: e.target.name,
    value: e.target.value,
  }
}

export function onRegisterLoading() {
  return {
    type: types.REGISTER_FORM_LOADING
  }
}

export function onRegisterError(error) {
  return {
    type: types.REGISTER_FORM_ERROR,
    error
  }
}

export function onRegisterSuccess() {
  return {
    type: types.REGISTER_FORM_SUCCESS
  }
}
