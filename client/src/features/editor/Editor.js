import React from "react";
import Document from "./components/document";
import Files from "./components/files";
import Notes from "./components/notes";

export default () => {
  return (
    <div className="flex flex-row">
      <Files />
      <Document />
      <Notes />
    </div>
  );
};
