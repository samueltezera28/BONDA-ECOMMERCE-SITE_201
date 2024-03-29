import React from "react";
import { Link } from "react-router-dom";
import { loadingMode } from "../user/Message";

const SignupForm = ({ name, email, password }, handleChange, clickSubmit) => (
  <div className="form-mg">
  <form onSubmit={clickSubmit}>

    <div className="form mb-4">
      <input type="text" id="form1Example1" className="form-control" placeholder="Name"  value={name} onChange={handleChange('name')}/>
    </div>

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
    <button type="submit" className="btn btn-primary btn-block" style={loadingMode}>Sign up</button>
    <Link to='/signin'>
        <button className="btn btn-secondary btn-block mt-4">Signin</button>
      </Link>
  </form>
</div>
);

export default SignupForm;
