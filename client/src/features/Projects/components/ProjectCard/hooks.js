// import { useEffect } from "react";

import { useState } from "react";

export default () => {
  const [showDialog, setShowDialog] = useState(false);
  return { showDialog, setShowDialog };
};
