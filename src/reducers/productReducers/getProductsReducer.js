import * as types from './../../actions/types';

const initialState = {
  productsList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS_LIST:
      return {...state, productsList: action.productsList};
    default:
      return state
  }
}
