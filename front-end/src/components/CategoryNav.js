import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from '../core/APICore'

const CategoryNav = () => {
  // categories

  const [ cats, setCats ] = useState([]);
  const [ id, setId ] = useState('');
  const [ error, setError ] = useState(false);

  const init = () => {
    getCategories()
    .then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCats(data);
      }
    })
  }

  useEffect(() => {
    init();
  }, [])

  const handleClick = (id) => {
    setId(id);
    console.log(id);
  }

    const reloadPage = () => {

    window.location.reload()

  }

  return (
    <header className="mt=2">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">

      <div class="btn-group mob-cat-nav mx-4">
        <button
          class="btn btn-info btn-lg dropdown-toggle"
          type="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          Filter by
        </button>
        <ul class="dropdown-menu">
        {
          cats.map((nav, i) => (
            <li key={i} onClick={reloadPage} >
              <Link className="dropdown-item" aria-current="page" to={`/shop/?cid=${nav._id}`}>{nav.name}</Link>
            </li>
          ))
        }

        </ul>
      </div>

          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                cats.map((nav, i) => (
                  <li  onClick={reloadPage} className="nav-item active mx-2" key={i}>
                  <Link className="dropdown-item" aria-current="page" to={`/shop/?cid=${nav._id}`}>{nav.name}</Link>
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
