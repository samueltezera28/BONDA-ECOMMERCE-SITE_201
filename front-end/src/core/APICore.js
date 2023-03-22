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

export {getProducts,}
