import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import WithRouter from "./WithRouter";
import { signout, isAuthenticated } from "../auth";

const Nav = () => {
  let dashboard = 'user'

  if (isAuthenticated()) {
    const { user: { role } } = isAuthenticated();
    dashboard = role === 1 ? 'admin' : 'user';
  }

  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      {
        !isAuthenticated() &&
        <Fragment>
          <li>
            <Link to='/signin'>Signin</Link> 
          </li>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
        </Fragment>
      }

      {isAuthenticated() && (
          <Fragment>
            <li>
              <Link className='' to='/' onClick={signout}>Signout</Link>
            </li>
            <li>
              <Link to={`${dashboard}/dashboard`}>Dashboard</Link>
          </li>
      </Fragment>
        )}
    </ul>

  );
}

export default WithRouter(Nav);
