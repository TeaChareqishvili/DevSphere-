import FavoriteBlogs from "./components/FavoriteBlogs";
import Header from "./components/Header";

import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AllBlogs from "./components/AllBlogs";
import { ThemeContext } from "./context/Theme/ThemeProvider";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Header />
      <Routes>
        <Route path="/" element={<AllBlogs />} />

        <Route path="/favorite" element={<FavoriteBlogs />} />
      </Routes>
    </div>
  );
}

export default App;
