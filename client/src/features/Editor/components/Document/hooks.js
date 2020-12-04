// import { useEffect } from "react";

import { useState } from "react";

export default () => {
  const [document, setDocument] = useState("");
  return { document, setDocument };
};
