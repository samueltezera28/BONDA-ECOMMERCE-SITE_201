import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import Dashboard from "../components/Dashboad";
import { signout } from "../auth";

const UserDashboard = () => {
  const { user : { name, email, role } } = isAuthenticated();

  const myAccount = {
    title: 'My Account',
    data: [
      {name: 'Name', value: name },
      {name: 'Email', value: email},
      {name: 'Role', value: role === 1 ? 'Admin' : 'User'},
    ],
  }

  const accManager = {
    title: 'Account Manager',
    data: [
      {name: 'Update Profile', value: <>
        <Link to='/'><button className="btn btn-info mb-2 mx-1">Update</button></Link>
      </> },
      {name: 'Cart', value: <>
      <Link to='/'><button className="btn btn-primary mb-2 mx-1">Check</button></Link>
      <Link to='/'><button className="btn btn-warning mb-2 mx-1">Status</button></Link>
      </>},
      {name: 'History', value: <>
      <Link to='/'><button className="btn btn-primary mb-2 mx-1">See</button></Link>
      <Link to='/'><button className="btn btn-danger  mb-2 mx-1">Clear</button></Link></>},
    ],
  }

  return (
    <Layout title='User Dashboard'>
      <div className="container mt-5 mb-5">
        {Dashboard(myAccount)}
        {Dashboard(accManager)}
        <Link to='/' onClick={signout} >
          <button type="button" className="btn btn-dark btn-rounded mt-2 mob-out" style={{width: '100%'}}>Signout</button>
        </Link>
      </div>
    </Layout>
  )
}

export default UserDashboard;
