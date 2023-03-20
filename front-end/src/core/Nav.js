import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import WithRouter from "./WithRouter";
import '../styles/Nav.css';
import { signout, isAuthenticated } from "../auth";

const Nav = () => {
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
          <li>
            <Link className='' to='/' onClick={signout}>Signout</Link>
        </li>
        )}
    </ul>

  );
}

export default WithRouter(Nav);
