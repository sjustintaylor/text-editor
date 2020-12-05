import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Link to="/app/editor">Editor</Link>
      <br />
      <Link to="/app/projects">Projects</Link>
    </div>
  );
};
