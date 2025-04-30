import FavoriteBlogs from "./components/blogs/FavoriteBlogs";
import Header from "./components/Header";

import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { ThemeContext } from "./context/Theme/ThemeProvider";

import SignInPage from "./components/autho/SignInPage";
import SignUpPage from "./components/autho/SignUpPage";
import AllBlogs from "./components/blogs/AllBlogs";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path="/favorite" element={<FavoriteBlogs />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
