import React, {useEffect} from "react";
import "./Likes.scss";

const Likes = (props) => {

  useEffect(() => {
    console.log("llllllllllllllllllllllllll")
    console.log(2, props.accessToken)
    if (props.accessToken) {
      let accessUrl = `https://graph.facebook.com/v11.0/1314251948683709?fields=access_token&access_token=${props.accessToken}`
      let data = getData(accessUrl)
      console.log(data)
    }
  }, [])
  return (
    <div className="Likes">
      {props.accessToken}
    </div>
  );
};

export default Likes;
