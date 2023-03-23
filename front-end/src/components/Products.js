import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { getProducts } from '../core/APICore'
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
  }, [])


  return (
    <Layout>
    <div className="container">
      <div className="row ">
        {
          productByArrival.map((product, index) => (
            <Card key={index} product={product} />
          ))
        }
      </div>
      
      <div className="row">
        {
            productBySell.map((product, index) => (
              <Card key={index} product={product} />
        ))
        }
      </div>
    </div>
    </Layout>
  );
}

export default Products;
