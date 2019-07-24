import * as types from './../types';

export function getProducts(productsList) {
  return {
    type: types.GET_PRODUCTS_LIST,
    productsList
  }
}
