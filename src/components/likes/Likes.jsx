import React, {useEffect,useState} from "react";
import "./Likes.scss";
import { getData } from "../../helpers/helper";



const Likes = (props) => {
  let [pageToken,setPageToken] = useState(false);

  const getPageToken = (accessToken) => {
    console.log("llllllllllllllllllllllllll")
    console.log(2, accessToken)
    if (accessToken) {
      let accessUrl = `https://graph.facebook.com/v11.0/1314251948683709?fields=access_token&access_token=${accessToken}`
      getData(accessUrl)
        .then((data) => {
          console.log(data);
          setPageToken(data.access_token)
        })
      return;
    }
  
  }

  // getPageToken(props.accessToken);

  return (
    <div className="Likes">
      {
        () => {
          getPageToken(props.accessToken)
        }
      }
      <p>pageToken: {pageToken}</p>;
    </div>
  );
};

export default Likes;
