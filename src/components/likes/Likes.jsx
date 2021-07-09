import React, {useEffect} from "react";
import "./Likes.scss";
import { getData } from "../../helpers/helper";

const getPageToken = (accessToken) => {
  console.log("llllllllllllllllllllllllll")
  console.log(2, accessToken)
  if (accessToken) {
    let accessUrl = `https://graph.facebook.com/v11.0/1314251948683709?fields=access_token&access_token=${accessToken}`
    let data = getData(accessUrl)
    console.log(data)
  }

}

const Likes = (props) => {

  useEffect(() => {

  }, [])

  getPageToken(props.accessToken);

  return (
    <div className="Likes">
      {
        () => {
          getPageToken(props.accessToken)
        }
      }
    </div>
  );
};

export default Likes;
