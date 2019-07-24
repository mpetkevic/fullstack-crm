import {getProducts} from './../../actions/productActions/getProductsActions';
import axios from 'axios';

export const getProductList = () => (dispatch) => {
  const url = 'http://localhost:9000/api/product/all';

  axios.get(url)
    .then(res => dispatch(getProducts(res.data)))
    .catch(err => console.log(err))
}
