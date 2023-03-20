import React from "react";

const SigninForm = ({ email, password }, handleChange, clickSubmit) => (
  <div>
    <form onSubmit={clickSubmit}>
      <input type='text' placeholder='email' value={email} onChange={handleChange('email')}/>
      <input type='password' placeholder='password' value={password} onChange={handleChange('password')}/>
      <button>Submit</button>
    </form>
  </div>
);

export default SigninForm;
