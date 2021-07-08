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




async function postData(url = '', body = undefined, method='GET') {
  console.log("calling")
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





function Facebookpage(props) {
  const [accessTokenClient, setAccessToken] = useState(false);
  const [accessTokenPage, setAccessTokenPage] = useState(false);
  // let history = useHistory();

  const URI = "https://www.facebook.com/v11.0/dialog/oauth?client_id=232331721389865&redirect_uri=https%3A%2F%2Fmaster.d2fkzzti19cg91.amplifyapp.com%2F";


  const clicked = (e) => {
    e.preventDefault();
  }


  const getAccessKeyClient = async () => {

    // return(setAccessToken("torpidooo"));
    // setAccessToken("torpidooo");
    
    console.log("sss")
  
    // const queryString = window.location.search;
    // console.log(queryString);
    // const urlParameters = new URLSearchParams(queryString);
  
  
    // if (urlParameters.has('code')) {
    //   const facebookAuthenticationCode = urlParameters.get('code');
    //   let accessUrl = `https://graph.facebook.com/v11.0/oauth/access_token?client_id=232331721389865&redirect_uri=https%3A%2F%2Fmaster.d2fkzzti19cg91.amplifyapp.com%2F&client_secret=88892166144044c04cc89cd33b0c5bd6&code=${facebookAuthenticationCode}`;
  
  
  
    //   let data = await postData(accessUrl,undefined,'POST')
    //                 // .then((res) => {
    //                 //   setAccessToken(res.json().access_token)
  
    //                 // })
  
    //   if (data.status == 400) {
    //     console.log("capability");
    //     window.location = URI;
    //   }
  
    //   data = data.json();
    //   const access_token = data.access_token;
      // setAccessToken(data.access_token);
      // console.log(accessTokenClient);
      // return (access_token);
      // console.log(accessTokenClient);
  
      // return;
  
    // } else {
    //   window.location = URI;
    // }
  
  }





  // const getAccessKeyPage = async () => {

  //   const queryString = window.location.search;
  //   console.log(queryString);
  //   const urlParameters = new URLSearchParams(queryString);

  //   console.log(accessTokenClient, "non of my business");

  //   if (urlParameters.has('code')) {
  //     let accessUrl = `https://graph.facebook.com/v11.0/1314251948683709?fields=access_token&access_token=${accessTokenClient}`
     
  //     let data = await postData(accessUrl)

  //     return data.json();

  //   } else {
  //     window.location = URI;
  //   }

  // }

  useEffect(() => {


    // return(setAccessToken("torpidooo"));
    // setAccessToken("torpidooo");
    
    console.log("sss")
  
    const queryString = window.location.search;
    console.log(queryString);
    const urlParameters = new URLSearchParams(queryString);
  
  
    if (urlParameters.has('code')) {
      let facebookAuthenticationCode = urlParameters.get('code');
      let accessUrl = `https://graph.facebook.com/v11.0/oauth/access_token?client_id=232331721389865&redirect_uri=https%3A%2F%2Fmaster.d2fkzzti19cg91.amplifyapp.com%2F&client_secret=88892166144044c04cc89cd33b0c5bd6&code=${facebookAuthenticationCode}`;
  
      console.log(accessUrl);
  
      let data = postData(accessUrl,undefined,'POST')
                    .then((res) => {
                      // console.log(res.json())
                      if (res.status === 400) {
                        console.log("capability");
                        
                        // setTimeout(function(){ 
                        //   // window.location = URI;
                        // }, 5000);

                        


                      }else{

                        setAccessToken(res.json().access_token)
                        console.log(accessTokenClient);
                        return 
                      }

  
                    })
  
     
  
      // data = data.json();
      // const access_token = data.access_token;
      // setAccessToken(access_token);
  
    } else {
      window.location = URI;
    }
  

  }, [accessTokenClient]);



  return (
    <>

      <p>{accessTokenClient}</p>


    </>

  );

}

export default Facebookpage;


