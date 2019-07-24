import * as types from './../types';

export function onInputChange(e) {
  return {
    type: types.EDIT_PRODUCT_INPUT_CHANGE,
    name: e.target.name,
    value: e.target.value
  }
}

export function setProductEdit(id, product) {
  return {
    type: types.SET_PRODUCT_ID_ON_EDIT,
    id,
    product
  }
}

export function editProductError(error) {
  return {
    type: types.EDIT_PRODUCT_FORM_ERROR,
    error
  }
}

export function editProductLoading() {
  return {
    type: types.EDIT_PRODUCT_FORM_LOADING,
  }
}

export function editProductSuccess() {
  return {
    type: types.EDIT_PRODUCT_FORM_SUCCESS
  }
}
