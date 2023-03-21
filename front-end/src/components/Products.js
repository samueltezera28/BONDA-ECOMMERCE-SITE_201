import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../core/Layout";
import ProductPage from '../pages/ProductPage';
import { ProductsReq, getProducts } from '../core/APICore'
import CategoryNav from "./CategoryNav";

const Products = () => {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:8000/api/products');
      setProducts(res.data);
    };
    fetchPosts();
  }, [])


  return (
    <Layout>
      {CategoryNav()}
      {ProductPage(products)}
    </Layout>
  );
}

export default Products;
