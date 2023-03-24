import React from "react";
import $ from 'jquery'
import { Link } from "react-router-dom";
import { signout } from "../auth";

const NavTop = () => {
    $(document).ready(() => {
        const nav = document.getElementById("nav");
        document.getElementById("more").onclick = function () {
            if (nav.style.display === "flex") {
                nav.style.display = "none";
                document.getElementById("more").innerHTML = '<li class="more"><i class="fa-solid fa-list"></i></li>'
            } else {
                nav.style.display = "flex";
                document.getElementById("more").innerHTML = '<li class="more"><i class="fa-solid fa-x"></i></li>'
            }
        }
        
        const dash = document.getElementById("hidden-dashboard");
        document.getElementById("user-dashboard").onclick = function () {
            if (dash.style.display == "block")
                dash.style.display = "none";
            else
                dash.style.display = "block"
        }

        document.getElementById("signout").onclick = function () {
                dash.style.display = "none";
        }

        document.getElementById("goto-buttons").onclick = function () {
            dash.style.display = "none";
    }

        
    });

    $(window).scroll(function(){
        $('#b-bar').css('position','fixed').css('bottom','0');
    });

    const tabs = [
    { name: 'About', path: '#footer'},
    { name: 'Contact', path: '#footer'},
    { name: 'Help Center', path: '#footer'},
    { name: 'Call Us', path: '#footer'},
    ];
    
    const dashboard = [
        { name: 'Profile', path: '/user/dashboard' },
        { name: 'Admin', path: '/admin/dashboard' },
        { name: 'Carts', path: '' },
        { name: 'Dark Mode', path: '' },
    ]

    const mobile = [
        { name: 'Home', path: '', icon: <i className="fa-solid fa-house"></i>},
        { name: 'Products', path: '/products', icon: <i className="fa-solid fa-shirt"></i>},
        { name: 'Shop', path: '/shop', icon: <i class="fa-solid fa-bag-shopping"></i>},
        { name: 'Cart', path: '/cart', icon: <i className="fa-solid fa-cart-shopping"></i>},
        { name: 'Dash', path: '/user/dashboard', icon: <i className="fa-solid fa-user"></i>},
        { name: 'Admin', path: '/admin/dashboard', icon: <i className="fa-solid fa-lock"></i>},
    ]

  return ( 
  <>
    <div id="mobile" className="mobile">
        <div className="svg" id="more">
            <li className="more">
                <i className="fa-solid fa-list"></i>
            </li>
        </div>
        <ul><li>
            <h2> <Link to='/'>BondaShop</Link> </h2>
        </li></ul>
        <div></div>
    </div>
    
    <div className="nav" id="nav">
        <ul className="title">
            <li>
                <span>Bonda Makes you look good</span>
            </li>
        </ul>
        <ul className="nav-buttons">
            {
                tabs.map((tab, i) => (
                    <li key={i} className="nav-button">
                        <div className="show-tab">
                            <Link to={tab.path}>{tab.name}</Link>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>

    <div className="hidden-dashboard" id="hidden-dashboard">
        <ul className="goto-buttons" id='goto-buttons'>
            {dashboard.map((dash, i) => (
                <li key={i}>
                    <Link to={dash.path}>{dash.name}</Link>
                </li>
            ))}
            <li id="signout">
                <Link to='/' onClick={signout}>Signout</Link>
            </li>
        </ul>     
    </div>
    <div className="b-bar" id='b-bar'>
        <ul className="b-tab">
            {
                mobile.map((tab, i) => (
                    <li key={i} className='tab-l'>
                        <Link to={tab.path} className='tab-info'>
                            {tab.icon}
                            <span>{tab.name}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  </>
)}

export default NavTop;
