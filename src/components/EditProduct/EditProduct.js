import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';
import Loader from "../Loader/Loader";
import {onInputChange} from './../../actions/productActions/editProductActions';
import {editProduct} from './../../thunks/productThunks/editProductThunk';
import './EditProduct.scss';

class EditProduct extends Component {

  onEditProduct = (e) => {
    e.preventDefault();
    this.props.editProduct(this.props.editProductInfo, this.props.history);
  };

  render() {
    const {role} = this.props.auth;
    const {name: productName, description, picture, price, error, loading} = this.props.editProductInfo;
    const {onInputChange} = this.props;
    if (role !== 'ADMIN') return <Redirect to='/'/>
    return (
      <div>
        <div className='ProductEdit'>
          <form className='ProductEdit-form'>
            <h2>Edit New Product</h2>
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
            <button onClick={this.onEditProduct}>{loading ? <Loader h={15} color={'#353538'}/> : 'Edit Product'}</button>
          </form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    editProductInfo: state.editProduct
  }
};

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(onInputChange(e)),
  editProduct: (product, history) => dispatch(editProduct(product, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
