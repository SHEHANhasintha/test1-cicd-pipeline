import React from "react";
import "./Likes.scss";

const Likes = (props) => {
  return (
    <div className="Likes">
      {props.accessToken}
    </div>
  );
};

export default Likes;
