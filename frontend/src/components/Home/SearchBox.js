import React from "react";

const SearchBox = ({ title, setTitle, setShowScolding }) => {
  return (
    <input
      id="search-box"
      placeholder="What is it that you truly desire?"
      type="text"
      value={title}
      onChange={(e) => {
        setTitle(e.target.value);
        setShowScolding(true);
      }}
    ></input>
  );
};

export default SearchBox;
