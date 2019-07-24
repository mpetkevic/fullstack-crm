import * as types from './../types';

export function onInputChange(e) {
  return {
    type: types.ADD_PRODUCT_INPUT_CHANGE,
    name: e.target.name,
    value: e.target.value
  }
}

export function addProductError(error) {
  return {
    type: types.ADD_PRODUCT_FORM_ERROR,
    error
  }
}

export function addProductLoading() {
  return {
    type: types.ADD_PRODUCT_FORM_LOADING,
  }
}

export function addProductSuccess() {
  return {
    type: types.ADD_PRODUCT_FORM_SUCCESS
  }
}
