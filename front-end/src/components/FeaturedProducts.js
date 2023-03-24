import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { getProducts } from '../core/APICore'
import FeaturedCard from "./FeaturedCard";
import $ from 'jquery'

const BestSeller = () => {

  const [ productBySell, setProductBySell ] = useState([]);
  const [ error, setError ] = useState('');

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
    loadBySell();
  }, [])

  return (
    <Layout>
      <div className="row">
        {
          productBySell.map((product, index) => (
            <FeaturedCard key={index} product={product} />
          ))
        }
      </div>
    </Layout>
  );
}

const NewProduct = () => {

  const [ productByArrival, setProductByArrival ] = useState([]);
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

  useEffect(() => {
    loadByArrival();
  }, [])

  return (
    <Layout>
      <div className="row ">
      
        {
          productByArrival.map((product, index) => (
            <FeaturedCard key={index} product={product} />
          ))
        }
      </div>
    </Layout>
  );
}


export { BestSeller, NewProduct };
