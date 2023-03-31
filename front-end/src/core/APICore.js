import { API } from "../config";

const getProducts = async (sortBy) => {
  try {
    const response = await fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
      method: "GET"
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getCategories = async () => {
  try {
    const response = await fetch(`${API}/categories`, {
      method: 'GET'
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

const getFilteredProducts = async (skip=0, limit=6, filters = {}) => {
  const data = {
      limit,
      skip,
      filters
  };
  try {
    const response = await fetch(`${API}/products/by/search`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export {getProducts, getCategories, getFilteredProducts}
