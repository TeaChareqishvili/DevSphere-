import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeProvider";

//TODO underline active link

export default function Navigation() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <nav className="navigation-nav">
        <NavLink
          style={{ color: theme === "light" ? "#10474f" : "#ffffff" }}
          className="navigation-list"
          to="/"
        >
          Sport Blogs
        </NavLink>
        <NavLink
          style={{ color: theme === "light" ? "#10474f" : "#ffffff" }}
          className="navigation-list"
          to="/fashion"
        >
          Fashion Blogs
        </NavLink>
        <NavLink
          style={{ color: theme === "light" ? "#10474f" : "#ffffff" }}
          className="navigation-list"
          to="/history"
        >
          History Blogs
        </NavLink>
        <NavLink
          style={{ color: theme === "light" ? "#10474f" : "#ffffff" }}
          className="navigation-list"
          to="/favorite"
        >
          Favorite Blogs
        </NavLink>
      </nav>
    </>
  );
}
