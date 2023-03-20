import React, { useState, Fragment } from "react";
import { Navigate } from 'react-router-dom';
import Layout from "../core/Layout";
import SigninForm from "../pages/SigninForm";
import { SigninReq } from '../auth';
import { showError, showSuccess, showLoading } from "./Message";

const Signin = () => {
  const [ values, setValue ] = useState({
    email: '',
    password: '',
    loading: '',
    success: false,
    error: false,
    redirectToReferer: false,
  });

  const { email, password, loading, success, error, redirectToReferer } = values;

  const handleChange = name => event => {
    setValue({...values, [name]: event.target.value });
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    setValue({...values, error: false, success: false, loading: true });
    SigninReq({email, password})
    .then(data => {
      if (data.error) {
        setValue({ ...values, loading: false, error: data.error, success: false });
      } else {
        setValue({ ...values, loading: false, error: false, success: 'Signin Successfully', redirectToReferer: true });
      }
    })
  }

  const redirect = () => {
    if (redirectToReferer === true) {
      return <Navigate to='/' />
    }
  }

  return (
    <Layout title='signin' description='Please Signin'>
      {showLoading(loading)}
      {showError(error)}
      {showSuccess(success)}
      {SigninForm({email, password}, handleChange, clickSubmit)}
      {redirect()}
    </Layout>
  )
}

export default Signin;
