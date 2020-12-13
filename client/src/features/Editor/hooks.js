import { useState } from "react";

export default () => {
  const [currentDocument, setCurrentDocument] = useState(null);
  const [notes, setNotes] = useState([]);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return { currentDocument, setCurrentDocument, notes, files, error, loading };
};
