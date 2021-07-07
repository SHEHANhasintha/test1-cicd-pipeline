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
  const [accessTokenClient, setAccessToken] = useState(false);
  // let history = useHistory();
  const URI = "https://www.facebook.com/v11.0/dialog/oauth?client_id=232331721389865&redirect_uri=https%3A%2F%2Fmaster.d2fkzzti19cg91.amplifyapp.com%2F";

  const clicked = (e) => {
    e.preventDefault();
  }

  async function postData(url = '', body = undefined, method='GET') {

    const response = await fetch(url, {
      method, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        // 'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body
    })
    return response;

  };


  const getAccessKeyClient = async () => {

    const queryString = window.location.search;
    console.log(queryString);
    const urlParameters = new URLSearchParams(queryString);


    if (urlParameters.has('code')) {
      const facebookAuthenticationCode = urlParameters.get('code');
      let accessUrl = `https://graph.facebook.com/v11.0/oauth/access_token?client_id=232331721389865&redirect_uri=https%3A%2F%2Fmaster.d2fkzzti19cg91.amplifyapp.com%2F&client_secret=88892166144044c04cc89cd33b0c5bd6&code=${facebookAuthenticationCode}`;



      let data = await postData(accessUrl,undefined,'POST')
      if (data.status == 400) {
        window.location = URI;
      }

      return data.json();

    } else {
      window.location = URI;
    }

  }

  const getAccessKeyPage = async () => {

    const queryString = window.location.search;
    console.log(queryString);
    const urlParameters = new URLSearchParams(queryString);

    console.log(accessTokenClient, "non of my business");

    if (urlParameters.has('code')) {
      let accessUrl = `https://graph.facebook.com/v11.0/1314251948683709?fields=access_token&access_token=${accessTokenClient}`
     
      let data = await postData(accessUrl)

      return data.json();

    } else {
      window.location = URI;
    }

  }

  useEffect(function () {

    setAccessToken("carbohightrate");
    getAccessKeyClient()
      .then((data) => {
        console.log(data);
        setAccessToken(data.access_token);
        console.log(accessTokenClient);
        return data;
      })
      .then(() => {
        getAccessKeyPage().then((res) => {console.log(res)})
      })


    return;
  }, []);

  return (
    <>




    </>

  );

}

export default Facebookpage;


