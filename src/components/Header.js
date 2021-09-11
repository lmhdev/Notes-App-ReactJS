import React from "react";

const Header = ({ setDark }) => {
  return (
    <div className="header">
      <h1>The Notes App</h1>
      <button className="save" onClick={() => setDark((prev) => !prev)}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Header;
