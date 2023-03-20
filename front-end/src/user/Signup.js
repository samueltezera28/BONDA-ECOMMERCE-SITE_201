import React, { useState, Fragment } from "react";
import SignupForm from "../pages/SiginupForm";

const Signup = () => {
  const [ values, setValue ] = useState({
    email: '',
    password: '',
    success: false,
    error: false
  });

  const { name, email, password } = values;

  const handleChange = name => event => {
    setValue({...values, [name]: event.target.value });
  }

  const clickSubmit = (e) => {
    e.preventDefault();
    // SigninReq(values);
  }
  return (
    <Fragment>
      {SignupForm({name, email, password}, handleChange, clickSubmit)}
    </Fragment>
  )
}

export default Signup;
