import React from "react";
import {API} from "../config";

const createCategory = async (userId, token, name) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
  try {
    const reponse = await fetch(`${API}/category/create/${userId}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(name),
    })
    return await reponse.json();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

const createProduct = async (userId, token, product) => {
  const headers = {
    'Authorization': `Bearer ${token}`,
  }
  try {
    const reponse = await fetch(`${API}/product/create/${userId}`, {
      method: 'POST',
      headers,
      body: product,
    })
    return await reponse.json();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

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

export { createCategory, createProduct, getCategories }