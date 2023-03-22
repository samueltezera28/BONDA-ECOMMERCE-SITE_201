import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../core/Layout";
import ProductPage from '../pages/ProductPage';
import { getProducts } from '../core/APICore'
import CategoryNav from "./CategoryNav";
import Card from "./Card";


const Products = () => {

  const [ productByArrival, setProductByArrival ] = useState([]);
  const [ productBySell, setProductBySell ] = useState([]);
  const [ error, setError ] = useState('');

  const loadByArrival = () => {
    getProducts('createdAt')
    .then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductByArrival(data);
      }
    })
  }

  const loadBySell = () => {
    getProducts('sold')
    .then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductBySell(data);
      }
    })
  }


  useEffect(() => {
    loadByArrival();
    loadBySell();
    console.log(productByArrival);
  }, [])


  return (
    <Layout>
      <p>New products</p>
      {
        productByArrival.map((product, index) => (
          <Card key={index} product={product} />
        ))
      }
      <p>Best Sellers</p>
      {
        productBySell.map((product, index) => (
          <Card key={index} product={product} />
        ))
      }
    </Layout>
  );
}

export default Products;
