import React from "react";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import { showSuccess } from '../user/Message'
import $ from 'jquery'

const Home = () => {
  return (
    <Layout>
      {showSuccess()}
      {HomePage()}
  </Layout>
  )
}

export default Home;
