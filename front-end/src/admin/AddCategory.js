import React, { useState } from "react";
import Layout from "../core/Layout";
import NewCategoryForm from "../pages/NewCategoryForm";
import { isAuthenticated } from '../auth'
import { createCategory } from "./APIAdmin";
import { showError, showSuccess, showLoading } from '../user/Message'

const AddCategory = () => {
  
  const [ values, setValues ] = useState({
    name: '',
    error: false,
    success: false,
    loading: false,
  })

  const { token, user: { _id } } = isAuthenticated();

  const { name, error, success, loading } = values;
  
  const handleChange = (event) => {
    setValues({ ...values, name: event.target.value, error: false, success: false });
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ... values, loading: true, error: false, success: false });
    createCategory(_id, token, {name})
    .then(data => {
      if (data.error) {
        setValues({ ...values, error: 'Category already exists!', success: false, loading: false });
      } else {
        setValues({ ...values, error: false, success: 'Category created!', loading: false });
      }
    }).catch(err => {
      console.log(`Error: ${err}`);
    });
  }

  return (
    <Layout title='Add Category'>
      {showLoading(loading)}
      {showError(error)}
      {showSuccess(success)}
      {NewCategoryForm({name}, handleChange, clickSubmit)}
    </Layout>
  );
}

export default AddCategory;
