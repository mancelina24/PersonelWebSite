import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
  });

  return storedValue ? JSON.parse(storedValue) : initialValue;
};
