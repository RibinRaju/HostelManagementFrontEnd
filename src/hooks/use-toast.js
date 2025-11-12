import { useState } from "react";

export const useToast = () => {
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    alert(msg.title + "\n" + msg.description);
    setToast(msg);
  };

  return { toast, showToast };
};
