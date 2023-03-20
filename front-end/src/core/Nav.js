import React from "react";
import { Link } from 'react-router-dom'
import '../styles/Nav.css';

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
    </ul>

  );
}

export default Nav;
