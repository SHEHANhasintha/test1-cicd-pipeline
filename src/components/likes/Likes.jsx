import React, { useEffect, useState } from "react";
import "./Likes.scss";
import { getData } from "../../helpers/helper";



const Likes = (props) => {

  const extractData = async () => {
    console.log("caveeeeee",props.accessToken)
    const accessUrl = `https://graph.facebook.com/v11.0/1314251948683709_1406401799468723?access_token=${props.accessToken}`
    let data = await getData(accessUrl)
    // console.log(data.json().message);
    // data = data;
    const ret = data.message;
    console.log(data.message);
    // return <p>{data.message}</p>;
  }


  useEffect(() => {
    // extractData();
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
