import React from "react";
import "./searchedposts.css";

const SearchedPosts = ({ results }) => {
  return (
    <div className="searched_posts">
      {results.map((result, id) => {
        return (
          <div key={id}>
            <p>{result.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchedPosts;
