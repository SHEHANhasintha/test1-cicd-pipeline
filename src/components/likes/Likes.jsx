import React, {useEffect,useState} from "react";
import "./Likes.scss";
import { getData } from "../../helpers/helper";

const getPageToken = (accessToken) => {
  console.log("llllllllllllllllllllllllll")
  console.log(2, accessToken)
  if (accessToken) {
    let accessUrl = `https://graph.facebook.com/v11.0/1314251948683709?fields=access_token&access_token=${accessToken}`
    let data = getData(accessUrl)
    console.log(data)
    return data;
  }

}

const Likes = (props) => {
  let [pageToken,setPageToken] = useState(false);

  getPageToken(props.accessToken);

  return (
    <div className="Likes">
      {
        () => {
          getPageToken(props.accessToken)
            .then((data) => {
              setPageToken(data.access_token)
              return;
            })
        }
      }
    </div>
  );
};

export default Likes;
