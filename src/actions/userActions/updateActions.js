import * as types from './../types';

export function onInputChange(e) {
  return {
    type: types.UPDATE_USER_INPUT_CHANGE,
    name: e.target.name,
    value: e.target.value
  }
}

export function onUpdateLoading() {
  return {
    type: types.UPDATE_USER_FORM_LOADING
  }
}

export function onUpdateError(error) {
  return {
    type: types.UPDATE_USER_FORM_ERROR,
    error
  }
}

export function onUpdateSuccess() {
  return {
    type: types.UPDATE_USER_FORM_SUCCESS
  }
}
