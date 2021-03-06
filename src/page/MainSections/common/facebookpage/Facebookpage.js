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
import { postData, getData } from '../../../../helpers/helper';

import { Likes } from '../../../../components'






function Facebookpage(props) {
  const [accessTokenClient, setAccessToken] = useState(false);
  const [accessTokenPage, setAccessTokenPage] = useState(false);
  const [addinInfo, setAddinInfo] = useState('');
  const [addinElements, setAddinElements] = useState([]);
  // let history = useHistory();

  const URI = "https://www.facebook.com/v11.0/dialog/oauth?client_id=232331721389865&redirect_uri=https%3A%2F%2Fmaster.d2fkzzti19cg91.amplifyapp.com%2F";

  const getAccessKeyPage = async () => {

    const queryString = window.location.search;
    console.log(queryString);
    const urlParameters = new URLSearchParams(queryString);

    console.log(accessTokenClient, "non of my business");

    if (urlParameters.has('code')) {
      let accessUrl = `https://graph.facebook.com/v11.0/1314251948683709?fields=access_token&access_token=${accessTokenClient}`

      let data = await getData(accessUrl)

      return data.json();

    } else {
      window.location = URI;
    }

  }

  useEffect(() => {
    console.log(1);
    const queryString = window.location.search;
    console.log(queryString);
    const urlParameters = new URLSearchParams(queryString);

    if (urlParameters.has('code')) {
      let facebookAuthenticationCode = urlParameters.get('code');
      let accessUrl = `https://graph.facebook.com/v11.0/oauth/access_token?client_id=232331721389865&redirect_uri=https%3A%2F%2Fmaster.d2fkzzti19cg91.amplifyapp.com%2F&client_secret=88892166144044c04cc89cd33b0c5bd6&code=${facebookAuthenticationCode}`;

      postData(accessUrl)
        .then(data => {
          if (data.hasOwnProperty('error')) {
            console.log(data, "error")
            window.location.assign(URI);
            return;
          }
          console.log(data, "success")
          setAccessToken(data.access_token)
          // console.log(accessTokenClient)
          return data.access_token;

        })
        .then((accessToken) => {
          let accessUrl = `https://graph.facebook.com/v11.0/1314251948683709?fields=access_token&access_token=${accessToken}`
          getData(accessUrl)
            .then((data) => {
              console.log(data);
              setAccessTokenPage(data.access_token)
            })
        })
        .catch(err => {
          throw err;
        })

    } else {
      window.location.assign(URI);
      return;
    }


  }, []);

  const submit = (e) => {
    e.preventDefault();
    // '1314251948683709_1406401799468723'
    // 1314251948683709_1393873904054846
    let newEle = addinElements.concat(
      <Likes accessToken={accessTokenClient} accessTokenPage={accessTokenPage} value={addinInfo} />
    );
    setAddinElements(newEle);
  }

  const handleChange = (e) => {
    setAddinInfo(e.target.value.trim());

  }

  return (
    <>

      {
        accessTokenClient ? <p>page token client: {accessTokenClient}</p> : 'loading...'
      }
      {
        accessTokenPage ? <p>page token page: {accessTokenPage}</p> : 'loading...'
      }

      {
        addinElements.map(e => {
          console.log(e)
          return e;
        })

      }


      <form onSubmit={submit}>
        <label for="post">post id:</label><br />
        <input type="text" id="postId" name="post" onChange={e => handleChange(e)}  /><br />
        <input type="submit" value="Submit" onSubmit={e => submit(e)}/>
      </form>

    </>

  );

}

export default Facebookpage;


