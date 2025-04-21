import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeProvider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

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
