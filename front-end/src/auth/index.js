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

const SignupReq = async (user) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  try {
    const response = await fetch(`${API}/signup`, {
      method: 'POST',
      headers,
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

const autheticate = (data, cb) => {
  // checking the app is running on web browsers
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    cb();
  }
};

const isAuthenticated = () => {

}

const signout = async () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('jwt') !== null) {
      localStorage.removeItem('jwt');
    };
    try {
      const response = await fetch(`${API}/signout`);
      return response.json();
    } catch (err) {
      console.log(`Error: ${err}`)
    }
  }
}

export { SigninReq, SignupReq, autheticate, isAuthenticated, signout };
