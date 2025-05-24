import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/Theme/ThemeProvider";
import { useUser } from "@clerk/clerk-react";
import { NavigationProps } from "../type";

export default function Navigation({
  flexdirection,
  marginBottom,
}: NavigationProps) {
  const { theme } = useContext(ThemeContext);
  const { user } = useUser();

  return (
    <>
      <nav className="navigation-nav" style={{ flexDirection: flexdirection }}>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : theme === "light" ? "#10474f" : "#ffffff",
            marginBottom: marginBottom,
          })}
          className="navigation-list"
          to="/"
        >
          All Blogs
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : theme === "light" ? "#10474f" : "#ffffff",
            marginBottom: marginBottom,
          })}
          className="navigation-list"
          to="/favorite"
        >
          Favorite Blogs
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : theme === "light" ? "#10474f" : "#ffffff",
            marginBottom: marginBottom,
          })}
          className="navigation-list"
          to="/latest"
        >
          Latest Blogs
        </NavLink>
        {!user ? (
          <>
            <NavLink
              style={({ isActive }) => ({
                color: isActive
                  ? "red"
                  : theme === "light"
                  ? "#10474f"
                  : "#ffffff",
                marginBottom: marginBottom,
              })}
              className="navigation-list"
              to="/sign-in"
            >
              Sign In
            </NavLink>
          </>
        ) : (
          <li className="navigation-list"> Hello {user.firstName} !</li>
        )}
      </nav>
    </>
  );
}
