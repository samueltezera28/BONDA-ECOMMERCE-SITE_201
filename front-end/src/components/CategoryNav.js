import React from "react";

const CategoryNav = () => {
  return (
    <header classNameName="">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">Shop All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Top Wear</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Bottom Wear</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Foot Wear</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hoodies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Jackets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Kids</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Bags</a>
              </li>
            </ul>
          </div>
      </nav>
    </header>
  )
}

export default CategoryNav;
