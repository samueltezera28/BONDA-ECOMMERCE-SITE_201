import React, { useState, useEffect } from "react";
import { useSearchParams, } from "react-router-dom";
import Layout from "../core/Layout";
import Card from "./Card";
import CategoryNav from "./CategoryNav";
import { getFilteredProducts } from '../core/APICore'


const Shop = () => {

  const [ filter, setFilter ] = useState([]);
  const [ error, setError ] = useState(false);
  const [ cid, setCid ] = useState('');
  const [searchParams] = useSearchParams();

  // console.log(searchParams.get('cid'));
  const init = () => {
    getFilteredProducts(0, 6, { category: [searchParams.get('cid')] })
    .then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilter(data.data);
      }
    })
  }

  const url = window.location.pathname.split('/').pop();

  useEffect(() => {
    init();
  }, [])

  const getId = (id) => {
    setCid(id);
  }

  return (
    <Layout title="Shop">
      <CategoryNav getId={getId} />
      <div className="container mt-5 mb-5">
        <div className="row">
          {
              filter.map((product, index) => (
                <Card key={index} product={product} />
          ))
          }
        </div>
      </div>
    </Layout>
  );
}

export default Shop;
