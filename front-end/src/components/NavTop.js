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
        
        const btabs = document.getElementsByClassName("b-tab");
        const bicons = document.getElementsByClassName("b-icon");
        const btitles = document.getElementsByClassName("b-title");
        for (let i = 0; i < btabs.length; i++) {
        
            btabs[i].onclick = function () {
                for (let j = 0; j < btabs.length; j ++) {
                    btabs[j].style.backgroundColor = "rgb(241, 239, 238)";
                    bicons[j].style.backgroundColor = "rgb(241, 239, 238)";
                    btitles[j].style.color = "black";
                }
                if ( btabs[i].style.backgroundColor == "rgb(241, 239, 238)") {
                    btabs[i].style.backgroundColor = "rgb(51, 44, 57";
                    btitles[i].style.color = "white";
                } else {
                    btabs[i].style.backgroundColor = "rgb(241, 239, 238)";
                }
            }
        }
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
        { name: 'Home', path: '', icon: ''},
        { name: 'Products', path: '/products'},
        { name: 'Dashboard', path: '/user/dashboard' },
    ]


  return (
  <>
    <div id="mobile" className="mobile">
        <div className="svg" id="more">
            <li className="more">
                <i class="fa-solid fa-list"></i>
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
        <ul className="goto-buttons">
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
    
    <div className="b-bar">
        <div className="b-tab">
            <ul>
                <li>

                </li>
            </ul>

        </div>
        
    </div>
  </>
)}

export default NavTop;
