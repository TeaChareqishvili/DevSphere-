import FashionBlogs from "./components/FashionBlogs";
import FavoriteBlogs from "./components/FavoriteBlogs";
import Header from "./components/Header";
import HistoryBlogs from "./components/HistoryBlogs";
import SportBlogs from "./components/SportBlogs";
import { ThemeContext } from "./Theme/ThemeProvider";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <Header />
      <Routes>
        <Route path="/" element={<SportBlogs />} />
        <Route path="/history" element={<HistoryBlogs />} />
        <Route path="/fashion" element={<FashionBlogs />} />
        <Route path="/favorite" element={<FavoriteBlogs />} />
      </Routes>
    </div>
  );
}

export default App;
