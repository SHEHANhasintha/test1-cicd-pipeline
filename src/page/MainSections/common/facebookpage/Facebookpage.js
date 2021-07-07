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

  const getQueryString = () => {
    
    const queryString = window.location.search;
    console.log(queryString);
    const urlParameters = new URLSearchParams(queryString);
    

    if (urlParameters.has('code')){
      const facebookAuthenticationCode = urlParameters.get('code');
      setFaceBookAuthCode(facebookAuthenticationCode);
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


