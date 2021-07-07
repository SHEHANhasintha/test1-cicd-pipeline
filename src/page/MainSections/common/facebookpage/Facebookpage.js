import React, { Component, useContext, useEffect, useState } from 'react';

import './Facebookpage.scss'

function Facebookpage(props) {

  const [setFaceBookAuthCode,fbAuthCode] = useState('');

  const clicked = (e) => {
    e.preventDefault();
  }

  const getQueryString = () => {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParameters = new URLSearchParams(queryString);
    

    if (queryString.has('code')){
      const facebookAuthenticationCode = urlParameters.get('code');
      setFaceBookAuthCode(facebookAuthenticationCode);
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


