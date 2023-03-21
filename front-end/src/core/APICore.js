import React from "react";
import { API } from "../config";
import axios from 'axios'

const ProductsReq = async () => {
  try {
    // const reponse = await fetch(`${API}/products`)
    // return reponse.json();
    const res = await axios.get(`${API}/products`);
    return res.json();
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

export const getProducts = sortBy => {
  return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
      method: "GET"
  })
      .then(response => {
          return response.json();
      })
      .catch(err => console.log(err));
};

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
