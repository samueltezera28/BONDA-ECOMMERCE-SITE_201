import React, { useState, Fragment } from "react";
import Layout from "../core/Layout";
import SignupForm from "../pages/SiginupForm";
import { SignupReq } from "../auth";
import { showError, showSuccess, showLoading } from './Message'

const Signup = () => {
  const [ values, setValue ] = useState({
    name: '',
    email: '',
    password: '',
    loading: '',
    success: false,
  });

  const { name, email, password, loading, success, error } = values;

  const handleChange = name => event => {
    setValue({...values, [name]: event.target.value });
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    setValue({...values, error: false, success: false, loading: true });
    SignupReq({name, email, password})
    .then(data => {
      if (data.error || data.err) {
        setValue({ ...values, loading: false, error: data.error || 'Email already exists!', success: false });
      } else {
        setValue({ ...values, loading: false, error: false, success: 'Account Created!', redirectToReferer: true });
      }
    })
  }

  return (
    <Layout>
      {showLoading(loading)}
      {showError(error)}
      {showSuccess(success)}
      {SignupForm({name, email, password}, handleChange, clickSubmit)}
    </Layout>
  )
}

export default Signup;
