import React, { useState, useEffect } from "react";
import NewProductForm from "../pages/NewProductForm";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { showLoading, showError, showSuccess } from "../user/Message";
import { createProduct, getCategories } from "./APIAdmin";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    shipping: '',
    quantity: '',
    photo: '',
    loading: false,
    error: false,
    success: false,
    createdProduct: '',
    redirectToProfile: false,
    formData: ''
});

const { user : { _id }, token } = isAuthenticated();
const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    success,
    createdProduct,
    redirectToProfile,
    formData
} = values;

  // load categories and set form data
  const init = () => {
    getCategories().then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error });
        } else {
            setValues({
                ...values,
                categories: data,
                formData: new FormData()
            });
        }
    });
  };

  useEffect(() => {
      init();
  }, []);

  const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, error: false, success: false });
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false, success: false});
    createProduct(_id, token, formData)
    .then(data => {
      if (data.error) {
        setValues({ ...values, loading: false, error: data.error, success: false});
      } else {
        setValues({ ...values, loading: false, error: false, success: 'Product created!',     name: '',
        description: '',
        price: '',
        category: '',
        quantity: '',
        photo: '',
      });
      }
    })
  }

  return (
    <Layout title='Add Product' className='container' >
      {showLoading(loading)}
      {showError(error)}
      {showSuccess(success)}
      {NewProductForm(values, handleChange, clickSubmit)}
    </Layout>
  )
}

export default AddProduct;
