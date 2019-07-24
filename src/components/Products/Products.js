import React, {Component} from 'react';
import {connect} from "react-redux";
import {getProductList} from './../../thunks/productThunks/getProductsThunk';
import './Products.scss';

class Products extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

  addUser = () => {
    this.props.history.push('/products/add-product');
  }

  render() {
    const {productsList: products} = this.props.productsList;
    const {role} = this.props.auth;
    console.log(products);
    const mappedProducts = products && products.map(product => {
      return (
        <div className='Product' key={product.id}>
          <h5>{product.name}</h5>
          <img src={product.picture} alt={product.name}/>
          <p>{product.price} €</p>
          <div className='ActionButtons'>
            <button>Add</button>
            {role === 'ADMIN' ? <button>Edit</button> : null}
            {role === 'ADMIN' ? <button>Delete</button> : null}
          </div>
        </div>
      )
    })
    return (
        <div className='Products'>
          <h2>Products</h2>
          {role === 'ADMIN' ? <button onClick={this.addUser} className='AddProduct'>Add Product</button> : null}
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
  getProducts: () => dispatch(getProductList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
