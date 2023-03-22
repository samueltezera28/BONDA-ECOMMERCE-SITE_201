import React from "react";

const ProductPage = (products) => {
  return (
    <div>
      <ul>
        {products.map(product => <li key={product._id}>
          <img src={"http://localhost:8000/api/product/photo/" + product._id} width="306px" height="280px" alt="item image" className="card-img-top" />
        </li>)}
      </ul>
    </div>
  )
}

export default ProductPage;
