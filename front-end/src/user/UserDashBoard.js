import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import Dashboard from "../components/Dashboad";

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
      {name: 'Update Profile', value: <Link to='/'>Update</Link> },
      {name: 'Cart', value: <><Link to='/'>Check</Link>{' '}<Link to='/'>Status</Link></>},
      {name: 'History', value: <><Link to='/'>See</Link>{' '}<Link to='/'>Clear</Link></>},
    ],
  }

  return (
    <Layout title='User Dashboard'>
      {Dashboard(myAccount)}
      {Dashboard(accManager)}
    </Layout>
  )
}

export default UserDashboard;
