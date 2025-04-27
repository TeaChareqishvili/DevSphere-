import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme/ThemeProvider";
import { useUser } from "@clerk/clerk-react";

export default function Navigation() {
  const { isSignedIn } = useUser();

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <nav className="navigation-nav">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : theme === "light" ? "#10474f" : "#ffffff",
          })}
          className="navigation-list"
          to="/"
        >
          All Blogs
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : theme === "light" ? "#10474f" : "#ffffff",
          })}
          className="navigation-list"
          to="/favorite"
        >
          Favorite Blogs
        </NavLink>
        {isSignedIn && (
          <NavLink
            style={({ isActive }) => ({
              color: isActive
                ? "red"
                : theme === "light"
                ? "#10474f"
                : "#ffffff",
            })}
            className="navigation-list"
            to="/profile"
          >
            Profile
          </NavLink>
        )}

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : theme === "light" ? "#10474f" : "#ffffff",
          })}
          className="navigation-list"
          to="/sign-in"
        >
          Sign In
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : theme === "light" ? "#10474f" : "#ffffff",
          })}
          className="navigation-list"
          to="/sign-up"
        >
          Sign Up
        </NavLink>
      </nav>
    </>
  );
}
