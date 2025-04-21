import logo from "../assets/images/blog-logo.png";
import Navigation from "./Navigation";
import { useContext } from "react";

import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeContext } from "../Theme/ThemeProvider";

export default function Header() {
  const { headerTheme } = useContext(ThemeContext);
  return (
    <div className={`header-container-outer ${headerTheme}`}>
      <div className="header-container-inner">
        <div className="image">
          <img src={logo} alt="logo" />
        </div>
        <Navigation />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
