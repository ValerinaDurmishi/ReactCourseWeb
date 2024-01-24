import React, { useEffect, useState } from "react";
import "./postpage.css";
import Post from "./Post";
const PostsPage = () => {
  const [postsWithShowMore, setPostsWithShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [valueOfPosts, setValueOfPosts] = useState(6);
  const [posts, setPosts] = useState([]);

  console.log("executed");

  const handleShowMore = () => {
    setValueOfPosts(valueOfPosts + 6);
    setPostsWithShowMore(!postsWithShowMore);
  };

  const handleShowLess = () => {
    setValueOfPosts(valueOfPosts - 6);
    setPostsWithShowMore(!postsWithShowMore);
  };

  useEffect(() => {
    getPosts();
  }, [postsWithShowMore]);

  const getPosts = async () => {
    try {
      setIsLoading();
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });
      let data = await response.json();
      setPosts(data.filter((_, i) => i < valueOfPosts));
    } catch (error) {
      setIsLoading(false);
      console.log("error ne App");
      console.log("error", error);
      setError("Fetch request has errors");
    }
  };

  if (isLoading) {
    return <div>Your data is loading....Please wait!</div>;
  }

  if (error) {
    return <div>Error while fetching the request!</div>;
  }
  return (
    <div className="posts_background_color">
      <h2>Recommended house for you</h2>
      <p>
        We provide many nice properties and we are sure you will like it very
        much.
      </p>
      <div className="posts">
        {posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
      </div>
      {posts.length === 6 ? (
        <button className="show_more_btn" onClick={handleShowMore}>
          Show more posts
        </button>
      ) : (
        <>
          <button className="show_more_btn" onClick={handleShowMore}>
            Show more posts
          </button>
          <button className="show_less_btn" onClick={handleShowLess}>
            Show less posts
          </button>
        </>
      )}
    </div>
  );
};

export default PostsPage;
