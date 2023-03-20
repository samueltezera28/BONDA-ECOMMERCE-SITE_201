import { API } from "../config";

const SigninReq = async (user) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  try {
    const response = await fetch(`${API}/signin`, {
      method: 'POST',
      headers,
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

export {SigninReq}
