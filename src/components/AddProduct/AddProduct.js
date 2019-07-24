import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import Loader from "../Loader/Loader";
import {onInputChange} from './../../actions/productActions/addProductActions';
import {addProduct} from './../../thunks/productThunks/addProductThunk';
import './AddProduct.scss';

class AddProduct extends Component {

  onAddProduct = (e) => {
    e.preventDefault();
    this.props.addProduct(this.props.addProductInfo, this.props.history);
  };

  render() {
    const {role} = this.props.auth;
    const {name: productName, description, picture, price, error, loading} = this.props.addProductInfo;
    const {onInputChange} = this.props;
    if (role !== 'ADMIN') return <Redirect to='/'/>
    return (
      <div>
        <div className='ProductRegistration'>
          <form className='ProductRegistration-form'>
            <h2>Add New Product</h2>
            {error !== '' ? <p className='error'>{error}</p> : null}
            <label htmlFor='name'>Product Name</label>
            <input
              type='text'
              name='name'
              value={productName}
              onChange={onInputChange}
              placeholder='Please enter product name'/>
            <label htmlFor='name'>Product Picture Link</label>
            <input
              type='text'
              name='picture'
              value={picture}
              onChange={onInputChange}
              placeholder='Please enter product link'/>
            <label htmlFor='name'>Product Description</label>
            <input
              type='text'
              name='description'
              value={description}
              onChange={onInputChange}
              placeholder='Please enter product Description'/>
            <label htmlFor='name'>Product Price</label>
            <input
              type='number'
              name='price'
              value={price}
              onChange={onInputChange}
              placeholder='Please enter product name'/>
            <button onClick={this.onAddProduct}>{loading ? <Loader h={15} color={'#353538'}/> : 'Add Product'}</button>
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    addProductInfo: state.addProduct
  }
};

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(onInputChange(e)),
  addProduct: (product, history) => dispatch(addProduct(product, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
