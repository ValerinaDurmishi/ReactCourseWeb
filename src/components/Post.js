import React from "react";
import homelogo from "../images/black-estate-logo.jpg";
import "./post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img className="home_logo" src={homelogo} alt="" />
      <h4>
        <strong>Apex</strong> Homes.
      </h4>
      <h5> {post.id}</h5>
      <h6> {post.title}</h6>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
