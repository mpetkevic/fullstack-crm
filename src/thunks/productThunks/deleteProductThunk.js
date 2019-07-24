import {getProductList} from './getProductsThunk';
import axios from 'axios';

export const deleteProduct = (id) => (dispatch) => {
  const url = `http://localhost:9000/api/product/delete/${id}`;

  axios.delete(url)
    .then(() => dispatch(getProductList()))
    .catch(err => console.log(err));
};
