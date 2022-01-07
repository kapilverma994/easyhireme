
import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from './router';
import React,{useState,useEffect} from "react";
import './assets/css/custom.css';
import "slick-carousel/slick/slick-theme.css";

import "slick-carousel/slick/slick.css";
import axios from 'axios'
import Config from "./Config";
import { encryptData } from "./libs/storage";
const App = () => {
  const headers = {
  
    'x-api-key': Config().apiKey,

};
  useEffect(() => {
    // GET request using axios inside useEffect React hook
    if(!localStorage.getItem('deviceToken')){
      axios.get(Config().apiEndpoints.deviceToken,{headers})
      .then(response => localStorage.setItem('deviceToken',encryptData(response.data.deviceToken, Config().apiKey)))
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });;
    }
 

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  return (
    <Router>
      <Routes />
    </Router>
  );
}
export default App;
