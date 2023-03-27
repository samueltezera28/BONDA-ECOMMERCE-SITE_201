import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import $ from 'jquery'
import WithRouter from "./WithRouter";
import { signout, isAuthenticated } from "../auth";
import Search from "../components/Search";
import NavTop from "../components/NavTop";

const Nav = () => {
  let dashboard = 'user'
  if (isAuthenticated()) {
    const { user: { role } } = isAuthenticated();
    dashboard = role === 1 ? 'admin' : 'user';
  }

  return ( 
    <div className="nav-box">

      <NavTop />

      <div className="nav-b">
        <div className="nav-l">
          <ul>
          <li>
              <Link to='/' className="name">BondaShop</Link>
          </li>
          <li>
            {Search()}
          </li>
          </ul>
        </div>


        
        <div className="nav-r">
          <ul>
            <li>
              <Link to='/shop'>Shop</Link>
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

            {isAuthenticated() ? (
              <>
              <li>
              <Link to='/cart'>Cart</Link>
              </li>
              <li>
                  <i className="fa-solid fa-user" id="user-dashboard"></i>
              </li>
              </>
            ) :
              <>
                <div id="user-dashboard"></div>
              </>
            }
          </ul>  
        </div>
      </div>

      
    </div>

  );
}

export default WithRouter(Nav);
