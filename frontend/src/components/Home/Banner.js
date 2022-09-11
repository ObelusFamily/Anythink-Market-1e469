import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import SearchBox from "./SearchBox";

const Banner = ({ title, setTitle, setShowScolding }) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">
            A place to <a onClick={() => setShowSearch(!showSearch)}>get</a>
          </span>
          {showSearch && (
            <SearchBox
              title={title}
              setTitle={setTitle}
              setShowScolding={setShowScolding}
            ></SearchBox>
          )}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
