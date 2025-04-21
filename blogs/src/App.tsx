import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeContext } from "./Theme/ThemeProvider";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <ThemeSwitcher />
      <p>teeext coloor changee!!!</p>
    </div>
  );
}

export default App;
