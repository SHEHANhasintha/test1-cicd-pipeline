import React, { useEffect, useState } from "react";
import "./Likes.scss";
import { getData,getDatatemp } from "../../helpers/helper";



const Likes = (props) => {
  const [message,setMessage] = useState(false);

  const extractData = async () => {


    console.log("caveeeeee",props.accessToken)
    const accessUrl = `https://graph.facebook.com/v11.0/1314251948683709_1406401799468723?access_token=${props.accessToken}`
    // let data = await getDatatemp(accessUrl)



    // console.log(data.json().message);
    // data = data;

    // console.log(data.message);
    // return <p>{data.message}</p>;
    // setMessage(data.message);
    //return <p>{message}</p>
  }


  useEffect(() => {

  }, [props.accessToken,message])


  return (
    <div className="Likes">
      {
        props.accessToken ? extractData() : "loading..."
      }

    </div>
  );
};

export default Likes;
