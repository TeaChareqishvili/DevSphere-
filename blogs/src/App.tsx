import Header from "./components/Header";
import { ThemeContext } from "./Theme/ThemeProvider";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Header />
    </div>
  );
}

export default App;
