import React from "react";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import { showSuccess } from '../user/Message'

const Home = () => {
  return (
    <Layout>
      {showSuccess()}
      {HomePage()}
  </Layout>
  )
}

export default Home;
