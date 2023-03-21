import React from "react";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";

const Home = () => {
  return (
    <Layout>
      {HomePage()}
  </Layout>
  )
}

export default Home;
