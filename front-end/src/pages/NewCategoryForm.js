import React from "react";
import { loadingMode } from "../user/Message";

const NewCategoryForm = ({name}, handleChange, clickSubmit) => {
  return (
    <form onSubmit={clickSubmit}>
      <input type='text' placeholder="name" value={name} onChange={handleChange} required />
      <button type='submit' style={loadingMode}>Add Category</button>
    </form>
  )
}

export default NewCategoryForm;
