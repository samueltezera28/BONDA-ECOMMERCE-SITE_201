import React from "react";
import { Link } from 'react-router-dom'
import '../styles/Nav.css';
import { signout } from "../auth";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/signin'>Signin</Link>
      </li>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
      <li>
        <Link to='/' onClick={signout}>Signout</Link>
      </li>
    </ul>

  );
}

export default Nav;
