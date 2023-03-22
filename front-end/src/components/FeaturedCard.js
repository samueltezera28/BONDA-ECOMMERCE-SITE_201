import React from "react";
import { Link } from "react-router-dom";
import PhotoLoad from "./PhotoLoad";

const FeaturedCard = ({product}) => {
  return (
    <div className="col-xxl-2 col-xl-3 col-lg-4 col-sm-6">
      <div className="card fea-card">
        <div className="card-body">
          <PhotoLoad item={product}  url='product' />
          <span>{ product.name }</span>
          <Link to="/">
            <p>View Product</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
