import React from "react";
import Layout from "./Layout";
import HomePage from "../pages/HomePage";
import { showSuccess } from '../user/Message'
import $ from 'jquery'

function ipLookUp () {
  $.ajax('http://ip-api.com/json')
  .then(
      function success(response) {
          console.log('User\'s Location Data is ', response);
          console.log('User\'s Country', response.country);
      },

      function fail(data, status) {
          console.log('Request failed.  Returned status of',
                      status);
      }
  );
}

const Home = () => {
  return (
    <Layout>
      {
        ipLookUp()
      }
      {showSuccess()}
      {HomePage()}
  </Layout>
  )
}

export default Home;
