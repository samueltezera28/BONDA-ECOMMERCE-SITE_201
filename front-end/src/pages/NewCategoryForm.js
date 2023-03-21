import React from "react";
import { loadingMode } from "../user/Message";

const NewCategoryForm = ({name}, handleChange, clickSubmit) => {
  return (
    <div className="form-mg">
      <form onSubmit={clickSubmit}>
        <input type='text' className="form-control" placeholder="name" value={name} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary btn-block" style={{...loadingMode, marginTop: '10px'}}>Add Category</button>
      </form>
    </div>
  )
}

export default NewCategoryForm;
