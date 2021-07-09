import React, { useEffect, useState } from "react";
import "./Likes.scss";
import { getData } from "../../helpers/helper";



const Likes = (props) => {
  const [message,setMessage] = useState(false);

  useEffect(() => {
    if (!props.accessToken){
      return
    }
    console.log("caveeeeee",props.accessToken)
    const accessUrl = `https://graph.facebook.com/v11.0/1314251948683709_1406401799468723?access_token=${props.accessToken}`
    let data = getData(accessUrl)

    console.log(data.message);
    setMessage(data.message);
  }, [props.accessToken,message])


  return (
    <div className="Likes">
      {
        message ? <p>{message}</p> : "loading..."
      }

    </div>
  );
};

export default Likes;
