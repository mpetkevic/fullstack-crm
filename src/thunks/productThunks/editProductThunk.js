import {editProductError, editProductLoading, editProductSuccess} from './../../actions/productActions/editProductActions';
import axios from 'axios';

export const editProduct = (product, history) => (dispatch) => {
  dispatch(editProductLoading());
  if(product.name === '' || product.price === '' || product.description === '', product.picture === '') {
    return dispatch(editProductError('Please fill all fields'));
  }

  const url = 'http://localhost:9000/api/product/update';

  const productJSON = {
    id: product.id,
    name: product.name,
    picture: product.picture,
    price: product.price,
    description: product.description
  }

  axios.put(url, productJSON)
    .then(() => {
      dispatch(editProductSuccess());
      history.push('/products');
    })
    .catch(() => dispatch(editProductError('Something wrong')));
}
