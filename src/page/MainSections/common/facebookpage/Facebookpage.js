import React, { Component, useContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


import './Facebookpage.scss'

function Facebookpage(props) {
  const [fbAuthCode,setFaceBookAuthCode] = useState('');
  let history = useHistory();

  const clicked = (e) => {
    e.preventDefault();
  }

  const postData =  async (url = '', data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const getQueryString = () => {
    
    const queryString = window.location.search;
    console.log(queryString);
    const urlParameters = new URLSearchParams(queryString);
    

    if (urlParameters.has('code')){
      const facebookAuthenticationCode = urlParameters.get('code');
      setFaceBookAuthCode(facebookAuthenticationCode);
      console.log(facebookAuthenticationCode)
      
      let accessUrl = `https://graph.facebook.com/v11.0/oauth/access_token?client_id=232331721389865&redirect_uri=https%3A%2F%2Fmaster.d2fkzzti19cg91.amplifyapp.com%2F&client_secret=88892166144044c04cc89cd33b0c5bd6&code=${facebookAuthenticationCode}`

      console.log(postData(accessUrl));
    }else{
      window.location = "https://www.facebook.com/v11.0/dialog/oauth?client_id=232331721389865&redirect_uri=https%3A%2F%2Fmaster.d2fkzzti19cg91.amplifyapp.com%2F";
    }

    

  }

  useEffect(function () {
    getQueryString();
    console.log(fbAuthCode);
    return;
  }, []);

  return (
    <>
      ghghghghghg

      

    </>

  );

}

export default Facebookpage;


