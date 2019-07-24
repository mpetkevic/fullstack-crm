import React, {Component} from 'react';
import {connect} from "react-redux";
import {getProductList} from './../../thunks/productThunks/getProductsThunk';
import {deleteProduct} from './../../thunks/productThunks/deleteProductThunk';
import {setProductEdit} from './../../actions/productActions/editProductActions';
import './Products.scss';

class Products extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

  addProduct = () => {
    this.props.history.push('/products/add-product');
  }

  editProduct = (id) => {
    const {productsList} = this.props.productsList;
    const product = productsList.filter(product => product.id === id);
    this.props.onSetProduct(id, product[0]);
    this.props.history.push('/products/edit-product');
  }

  render() {
    const {productsList: products} = this.props.productsList;
    const {role} = this.props.auth;
    const {onDeleteProduct} = this.props;
    const mappedProducts = products && products.map(product => {
      return (
        <div className='Product' key={product.id}>
          <h5>{product.name}</h5>
          <img src={product.picture} alt={product.name}/>
          <p>{product.price} €</p>
          <div className='ActionButtons'>
            <button>Buy</button>
            {role === 'ADMIN' ? <button onClick={() => this.editProduct(product.id)}>Edit</button> : null}
            {role === 'ADMIN' ? <button onClick={() => onDeleteProduct(product.id)}>Delete</button> : null}
          </div>
        </div>
      )
    })
    return (
        <div className='Products'>
          <h2>Products</h2>
          {role === 'ADMIN' ? <button onClick={this.addProduct} className='AddProduct'>Add Product</button> : null}
          <div className="ProductsList">
            {mappedProducts}
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsList: state.productsList,
    auth: state.auth
  }
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProductList()),
  onDeleteProduct: (id) => dispatch(deleteProduct(id)),
  onSetProduct: (id, product) => dispatch(setProductEdit(id, product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
