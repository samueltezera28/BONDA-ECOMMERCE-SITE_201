import React from "react";
import $ from 'jquery'
import { Link } from "react-router-dom";

const NavTop = () => {

    $(document).ready(() => {
        const nav = document.getElementById("nav");
      document.getElementById("svg").onclick = function () {
          if (nav.style.display === "flex") {
              nav.style.display = "none";
              document.getElementById("svg").innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>';
          } else {
              nav.style.display = "flex";
              document.getElementById("svg").innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>'
          }
      }
      
      const dash = document.getElementById("hidden-dashboard");
      document.getElementById("user-dashboard").onclick = function () {
          if (dash.style.display == "block")
              dash.style.display = "none";
          else
              dash.style.display = "block"
      }
      
      let progress = document.getElementById("progressbar");
      let totalHeight = document.body.scrollHeight -
          window.innerHeight;
      window.onscroll = function () {
          let progressHeight = (window.pageYOffset /
              totalHeight) * 100;
          progress.style.height = progressHeight + "%";
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
    


  return (
  <>
    <div id="mobile" className="mobile">
        <div className="svg" id="svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
        </div>
        <div className="logo">
            <span>My logo</span>
        </div>
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
                    <li className="nav-button">
                        <div className="show-tab">
                            <Link to={tab.path}>{tab.name}</Link>
                        </div>
                    </li>
                ))
            }


        </ul>
    </div>

    <div>
        <div className="user-dashboard" id="user-dashboard">
            <span className="user-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
            </span>
        </div>
        <div className="hidden-dashboard" id="hidden-dashboard">
            <ul className="goto-buttons">
                <li>
                    <a href="/alimama/dashboard.jsp">
                        <button>Update</button>
                    </a>
                </li>
                <li>
                    <a href="">
                        <button>History</button>
                    </a>
                </li>
                <li>
                    <a href="/alimama/signout.jsp">
                        <button>Logout</button>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    
    <div className="b-bar">
        <div className="b-tab"  id="home">
            <div>
                <svg className="b-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
                <i className="fa-light fa-house"></i>
                <br />
            </div>
            <span className="b-title">Home</span>
        </div>
        <div className="b-tab">
            <div id="products">
                <svg className="b-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path
                        d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" />
                </svg>
            </div>
            <span className="b-title">Products</span>
        </div>
        <div className="b-tab">
            <div id="cart">
                <svg className="b-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
            </div>
            <span className="b-title">Cart</span>
        </div>
        <div className="b-tab">
            <div id="settings">
                <svg className="b-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        d="M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                </svg>
            </div>
            <span className="b-title">Setting</span>
        </div>
        <div className="b-tab">
            <div id="about">
                <svg className="b-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
            </div>
            <span className="b-title">About</span>
        </div>
    </div>
  </>
)}

export default NavTop;
