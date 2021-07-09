import React, { useEffect, useState } from "react";
import "./Likes.scss";
import { getData } from "../../helpers/helper";



const Likes = (props) => {
  const [message, setMessage] = useState(false);




  useEffect(() => {
    console.log("caveeeeee", props.accessToken)
    const accessUrl = `https://graph.facebook.com/v11.0/1314251948683709_1406401799468723?access_token=${props.accessToken}`
    let data = getData(accessUrl)
    // console.log(data.json().message);
    // data = data;

    // console.log(data.message);
    // return <p>{data.message}</p>;
    setMessage(data.message);
  }, [message, props.accessToken])


  return (
    <div className="Likes">
      {
        props.message ? <p>{message}</p> : "loading..."
      }

    </div>
  );
};

export default Likes;
