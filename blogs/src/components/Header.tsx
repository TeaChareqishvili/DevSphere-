import logo from "../assets/images/blog-logo.png";
import Navigation from "./Navigation";
import { useContext } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeContext } from "../context/Theme/ThemeProvider";
import LogOut from "./autho/LogOut";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { headerTheme } = useContext(ThemeContext);

  const openMenuHandle = () => {
    setShowMenu(true);
  };
  return (
    <div className={`header-container-outer ${headerTheme}`}>
      <div className="header-container-inner">
        <NavLink to="/DevSphere-">
          <div className="image">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
        <div className="desktop-navigation">
          <Navigation flexdirection="row" marginBottom="0" />
        </div>
        <div className="desktop-navigation">
          <ThemeSwitcher />
          <LogOut />
        </div>
        <div className="mobile-menu">
          <FontAwesomeIcon
            onClick={openMenuHandle}
            icon={faBars}
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
          />
        </div>
      </div>
      {showMenu && <BurgerMenu setShowMenu={setShowMenu} />}
    </div>
  );
}
