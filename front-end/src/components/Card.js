import React from "react";
import { Link } from "react-router-dom";
import PhotoLoad from "./PhotoLoad";

const Card = ({product}) => {
  return (
    <div className="col-4 mb-3">
      <div className="card">
        <div className="card-header">
          { product.name }
        </div>
        
        <div className="card-body">
          <PhotoLoad item={product}  url='product' />
          <p>{ product.description }</p>
          <p><span className="mr-5">ETB</span>{ product.price }</p>
          <Link to="/">
            <button className="btn btn-outline-primary">View Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
