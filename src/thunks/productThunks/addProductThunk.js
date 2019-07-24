import {addProductError, addProductLoading, addProductSuccess} from './../../actions/productActions/addProductActions';
import axios from 'axios';

export const addProduct = (product, history) => (dispatch) => {
  dispatch(addProductLoading());
  if(product.name === '' || product.price === '' || product.description === '' || product.picture === '') {
    return dispatch(addProductError('Please fill all fields'));
  }

  const url = 'http://localhost:9000/api/product/add';

  const productJSON = {
    name: product.name,
    picture: product.picture,
    price: product.price,
    description: product.description
  }

  axios.post(url, productJSON)
    .then(() => {
      dispatch(addProductSuccess());
      history.push('/products');
    })
    .catch(() => dispatch(addProductError('Something wrong')));
}
