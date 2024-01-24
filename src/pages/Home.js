import React from "react";
import Hero from "../components/Hero";
import FirstPage from "../components/FirstPage";
import PostsPage from "../components/PostsPage";

const Home = () => {
  return (
    <div>
      <Hero />
      <FirstPage />
      <PostsPage />
    </div>
  );
};

export default Home;
