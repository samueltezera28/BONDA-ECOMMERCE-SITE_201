import React from "react";
import { Link } from "react-router-dom";
import PhotoLoad from "./PhotoLoad";

const Card = ({product}) => {
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
            <Link to="/">
              <button className="btn btn-outline-primary">View Product</button>
            </Link>
            <i class="fa-solid fa-plus"></i>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Card;
