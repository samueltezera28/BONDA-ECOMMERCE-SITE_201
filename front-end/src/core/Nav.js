import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import WithRouter from "./WithRouter";
import { signout, isAuthenticated } from "../auth";
import Search from "../components/Search";

const Nav = () => {
  let dashboard = 'user'

  if (isAuthenticated()) {
    const { user: { role } } = isAuthenticated();
    dashboard = role === 1 ? 'admin' : 'user';
  }

  return (
    <div className="nav-box">

      <div className="nav-t">
        <div>
          <ul>
            <li>
                <span></span>
                <span>
                  Bonda Makes you look good!
                </span>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <Link to='/about'>About</Link> 
              {/* <a href='/About'>About</a> */}
            </li>
            <li>
              <Link to='/contact'>Contact</Link> 
              {/* <a href='#'>Contact</a> */}
            </li>
            <li>
              <Link to='/helpCenter'>Help Center</Link> 
              {/* <a href='#'>Help Center</a> */}
            </li>
            <li>
              <span style={{paddingRight: '10px'}}>Call Us</span>
              <a href='tel:123-456-789'>123-456-789</a>
            </li>
          </ul>
        </div>
        
      </div>

      <div className="nav-b">
        <div className="nav-l">
          <ul>
            <li>
            <Link to='/'>BondaShop</Link>
            </li>
            <li>
              {Search()}
            </li>
          </ul>
        </div>
        
        <div className="nav-r">
          <ul>
            <li>
              <Link to='/products'>Products</Link>
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
        </div>
      </div>

      
    </div>

  );
}

export default WithRouter(Nav);
