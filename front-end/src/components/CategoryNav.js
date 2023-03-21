import React from "react";

const CategoryNav = () => {
  return (
    <header className="">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="collapse navbar-collapse" id="navbarExample01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item active">
                <a class="nav-link" aria-current="page" href="#">Shop All</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Top Wear</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Bottom Wear</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Foot Wear</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Hoodies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Jackets</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Kids</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Bags</a>
              </li>
            </ul>
          </div>
      </nav>
    </header>
  )
}

export default CategoryNav;
