import React from "react";
import TitleFilter from "./TitleFilter";

const MovieHeader = ({ onKeyUpFn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="text-white navbar-brand sitetitle" href="/react-movies">🎥 React Movies 🎥</a>
          <TitleFilter onKeyUpFn={onKeyUpFn} />
      </div>
    </nav>
  );
};

export default MovieHeader;
