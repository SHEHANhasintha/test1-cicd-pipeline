import React, { useEffect, useState } from "react";
import "./Likes.scss";
import { getData } from "../../helpers/helper";

const extractDiscription = async (props,setMessage) => {

  if (!props.accessToken){
    return
  }
  console.log("caveeeeee",props.accessToken)
  const accessUrl = `https://graph.facebook.com/v11.0/${props.value}?access_token=${props.accessToken}`
  let data = await getData(accessUrl)

  console.log(data);
  setMessage(data.message);
}

const extractLikesAndImages = async(props,setLikes,setImage) => {
  if (!props.accessToken){
    return
  }
  console.log("braeeeeee",props.accessToken)
  const accessUrl = `https://graph.facebook.com/v11.0/1314251948683709/feed?access_token=${props.accessToken}&fields=child_attachments%2Cattachments%2Clikes.summary(true)`;
  let data = await getData(accessUrl);



  data = data.forEach(element => {
    console.log(element)
    if (element.id.trim() === props.value.trim()){
      return element;
    }
  });

  console.log(data);
  
}

const Likes = (props) => {
  const [message,setMessage] = useState(false);
  const [Likes,setLikes] = useState(false);
  const [image,setImage] = useState(false);


  useEffect(() => {
    extractDiscription(props,setMessage);
    extractLikesAndImages(props,setLikes,setImage);
  }, [props.accessToken,props.value])


  return (
    <div className="Likes">
      {
        message ? <p>{message}</p> : "loading..."
      }

    </div>
  );
};

export default Likes;
