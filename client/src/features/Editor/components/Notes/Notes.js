import { Alert, Spinner, AddIcon, Button } from "evergreen-ui";
import React from "react";
import NoteCard from "../NoteCard";

export default () => {
  return (
    <div className="w-full max-w-sm  flex flex-col justify-items-center place-items-center pt-3 mb-3 overflow-y-auto">
      {error && (
        <Alert intent="danger" appearance="card">
          {error}
        </Alert>
      )}
      {loading && (
        <Alert intent="none" appearance="card" marginBottom={16}>
          <div className="flex flex-row items-center">
            <Spinner size={24} className="mr-3" /> Loading notes
          </div>
        </Alert>
      )}
      {!error && notes && (
        <>
          <div className="mb-5">
            <Button
              appearance="primary"
              iconBefore={AddIcon}
              onClick={() => saveNote("new", "")}
            >
              Add a new note
            </Button>
          </div>
          {notes.map((el) => (
            <NoteCard
              {...el}
              key={el.id}
              saveNote={saveNote}
              deleteNote={deleteNote}
            />
          ))}
        </>
      )}
    </div>
  );
};
