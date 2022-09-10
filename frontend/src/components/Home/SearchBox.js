import React from "react";

const SearchBox = ({ title, setTitle }) => {
  return (
    <input
      id="search-box"
      placeholder="What is it that you truly desire?"
      type="text"
      value={title}
      onChange={(e) => {
        setTitle(e.target.value);
      }}
    ></input>
  );
};

export default SearchBox;
