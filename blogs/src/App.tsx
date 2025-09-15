import FavoriteBlogs from "./components/blogs/FavoriteBlogs";
import Header from "./components/Header";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/Theme/ThemeProvider";
import SignInPage from "./components/autho/SignInPage";
import AllBlogs from "./components/blogs/AllBlogs";
import LatestBlogs from "./components/blogs/LatestBlogs";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path="/favorite" element={<FavoriteBlogs />} />
        <Route path="/latest" element={<LatestBlogs />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

export default App;
