import React, { useState } from "react";

const HeroInput = ({ setResults }) => {
  const [avaliableHomes, setAvaliableHomes] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((post) => {
          return (
            value &&
            post &&
            post.id &&
            post.title.toLowerCase().startsWith(value.toLowerCase())
          );
        });
        console.log(results);
        setResults(results);
      });
  };

  const handleSearch = (value) => {
    setAvaliableHomes(value);
    fetchData(value);
  };
  return (
    <div>
      <form className="form-hero-component">
        <input
          type="text"
          value={avaliableHomes}
          onChange={(evt) => handleSearch(evt.target.value)}
          placeholder="Search avaliable homes..."
        />
      </form>
    </div>
  );
};

export default HeroInput;
