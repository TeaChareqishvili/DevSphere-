import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../context/Theme/ThemeProvider";

export default function ThemeSwitcher() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? (
        <FontAwesomeIcon icon={faMoon} className="theme-icon" />
      ) : (
        <FontAwesomeIcon icon={faSun} className="theme-icon" />
      )}
    </div>
  );
}
