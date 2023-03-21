import React from "react";
import { API } from "../config";

const ProductsReq = async () => {
  try {
    const reponse = await fetch(`${API}/products`)
    return await reponse.json()
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

// const getProducts = sortBy => {
//   return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=12`, {
//       method: "GET"
//   })
//       .then(response => {
//           return response.json();
//       })
//       .catch(err => console.log(err));
// };

export {ProductsReq,}
