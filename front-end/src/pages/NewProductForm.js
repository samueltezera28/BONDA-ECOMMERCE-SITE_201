import React from "react";
import { loadingMode } from "../user/Message";

const NewProductForm = ({name, description, price, categories, quantity, }, handleChange, clickSubmit ) => (
  <div className="form-mg">
    <form onSubmit={clickSubmit}>
        <h4>Post Photo</h4>
        <div className="form-group">
            <label className="btn btn-secondary">
                <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
            </label>
        </div>

        <div className="form-group">
            <label className="text-muted">Name</label>
            <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
        </div>

        <div className="form-group">
            <label className="text-muted">Description</label>
            <textarea onChange={handleChange('description')} className="form-control" value={description} />
        </div>

        <div className="form-group">
            <label className="text-muted">Price</label>
            <input onChange={handleChange('price')} type="number" className="form-control" value={price} />
        </div>

        <div className="form-group">
            <label className="text-muted">Category</label>
            <select onChange={handleChange('category')} className="form-control">
                <option>Please select</option>
                {categories &&
                    categories.map((c, i) => (
                        <option key={i} value={c._id}>
                            {c.name}
                        </option>
                    ))}
            </select>
        </div>

        <div className="form-group">
            <label className="text-muted">Shipping</label>
            <select onChange={handleChange('shipping')} className="form-control">
                <option>Please select</option>
                <option value="0">No</option>
                <option value="1">Yes</option>
            </select>
        </div>

        <div className="form-group">
            <label className="text-muted">Quantity</label>
            <input onChange={handleChange('quantity')} type="number" className="form-control" value={quantity} />
        </div>

        <button type="submit" className="btn btn-primary btn-block" style={{...loadingMode, marginTop: '10px'}}>Add Product</button>
    </form>
  </div>
)

export default NewProductForm;
