import React from "react";

const CategoryNav = () => {

  const catNav = [
    {name: 'Shop All', path: '/products'},
    {name: 'Top Wear', path: '/products'},
    {name: 'Bottom Wear', path: '/products'},
    {name: 'Foot Wear', path: '/products'},
    {name: 'Hoodies', path: '/products'},
    {name: 'Jackets', path: '/products'},
  ];

  return (
    <header className="mt=2">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                catNav.map((nav, i) => (
                  <li className="nav-item active" key={i}>
                    <a className="nav-link" aria-current="page" href={nav.path}>{nav.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
      </nav>
    </header>
  )
}

export default CategoryNav;
