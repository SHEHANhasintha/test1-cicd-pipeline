import React, { useEffect, useState } from "react";
import "./Likes.scss";
import { getData } from "../../helpers/helper";



const Likes = (props) => {

  const extractData = async () => {
    const accessUrl = `https://graph.facebook.com/v11.0/1314251948683709_1406401799468723?access_token=${props.accessToken}`
    let data = await getData(accessUrl)
    return <p>{data.json().message}</p>;
  }


  useEffect(() => {
    test();
  }, [props.accessToken])


  return (
    <div className="Likes">
      {
        props.accessTokenPage ? extractData() : "loading..."
      }

    </div>
  );
};

export default Likes;
