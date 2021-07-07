import React, { Component, useContext, useEffect } from 'react';

import './Facebookpage.scss'

function Facebookpage(props) {

  const clicked = (e) => {
    e.preventDefault();
  }

  const getQueryString = () => {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParameters = new URLSearchParams(queryString);
    const facebookAuthenticationCode = urlParameters.get('code');
    console.log(facebookAuthenticationCode);

  }

  useEffect(function () {
    getQueryString();

    return;
  }, []);

  return (
    <>
      ghghghghghg

      

    </>

  );

}

export default Facebookpage;


