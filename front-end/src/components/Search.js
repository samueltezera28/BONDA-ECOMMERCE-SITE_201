import React from "react";

const Search = () => {
  return (
    <div className="input-group">
    <div className="form">
      <input type="search" id="form1" className="form-control" placeholder="Search"/>
    </div>
    <button type="button" className="btn btn-primary">
      <i className="fas fa-search"></i>
    </button>
  </div>
  )
}

export default Search;