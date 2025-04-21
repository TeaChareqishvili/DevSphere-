import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeProvider";

export default function ThemeSwitcher() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>switch</button>
    </div>
  );
}
