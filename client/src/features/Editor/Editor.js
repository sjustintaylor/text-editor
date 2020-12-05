import React from "react";
import Document from "./components/Document";
import Files from "./components/Files";
import Notes from "./components/Notes";
import useHooks from "./hooks";

export default () => {
  const { currentDocument, setCurrentDocument } = useHooks();
  return (
    <div className="flex flex-row flex-nowrap place-content-between h-screen w-screen bg-red-100">
      <Files setCurrentDocument={setCurrentDocument} />
      <Document currentDocument={currentDocument} />
      <Notes />
    </div>
  );
};
