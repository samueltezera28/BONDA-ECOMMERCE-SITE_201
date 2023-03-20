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

export { createCategory }