// import { useEffect } from "react";

import { useState } from "react";

export default () => {
  const [currentDocument, setCurrentDocument] = useState(null);
  return { currentDocument, setCurrentDocument };
};
