import { useEffect, useState } from "react";
import { MoonSvg, SunSvg } from "../svg/index";

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <button
      className="cursor-pointer"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? <SunSvg /> : <MoonSvg />}
    </button>
  );
};
