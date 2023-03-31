import React from "react";
import { Link } from "react-router-dom";
import PhotoLoad from "./PhotoLoad";
import Check from "./Check";
import { addItem } from "./cartHelper";
import { showSuccess } from '../user/Message'

const Card = ({product}) => {

  const addToCart = () => {
    addItem(product, () => {
      console.log('product added to cart')
    })
    showSuccess('Product added to cart');
  }
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 mb-2">
      <div className="card">
        <div className="card-header">
          { product.name }
        </div>

        <div className="card-body">
        <div>
          <div className="card-p">
            <PhotoLoad item={product}  url='product' />
          </div>
            {/* <p>{ product.description }</p> */}
            <p><span className="mr-5">ETB{' '}</span>{ product.price }</p>
        </div>

          <div className="card-b">
            <Link to="/products">
              <button className="btn btn-outline-primary">View Product</button>
            </Link>
            <i className="fa-solid fa-plus add" onClick={addToCart}></i>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
