import React from "react";
import { loadingMode } from "../user/Message";

const SigninForm = ({ email, password }, handleChange, clickSubmit) => (
  <div className="login-form">
    <form onSubmit={clickSubmit}>
      <div className="form mb-4">
        <input type="email" id="form1Example1" className="form-control" placeholder="Email"  value={email} onChange={handleChange('email')}/>
      </div>

      <div className="form mb-4">
        <input type="password" id="form1Example2" className="form-control" placeholder="Password"  value={password} onChange={handleChange('password')}/>
      </div>

      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
            <label className="form-check-label" for="form1Example3"> Remember me </label>
          </div>
        </div>

        <div className="col">
          <a href="#!">Forgot password?</a>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-block" style={loadingMode}>Sign in</button>
    </form>
  </div>
);
 
export default SigninForm;
