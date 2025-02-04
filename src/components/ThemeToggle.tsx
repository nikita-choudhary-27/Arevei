import React, { useEffect } from "react";

const ThemeToggle: React.FC = () => {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return null;
};

export default ThemeToggle;
