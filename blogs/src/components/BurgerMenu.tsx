import { useContext } from "react";
import { ThemeContext } from "../context/Theme/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { BurgerMenuClose } from "../type";
import Navigation from "./Navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import LogOut from "./autho/LogOut";

export default function BurgerMenu({ setShowMenu }: BurgerMenuClose) {
  const { theme } = useContext(ThemeContext);

  const closeMenuHandle = () => {
    setShowMenu(false);
  };
  return (
    <div className="burger-menu-outer-container">
      <div
        className="burger-menu-inner-container"
        style={{
          color: theme === "light" ? "#333" : "#ffffff",
          backgroundColor: theme === "light" ? "#fff" : "#333",
        }}
      >
        <div className="mobile-menu-icons">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={closeMenuHandle}
            style={{
              width: "30px",
              height: "30px",
              color: theme === "light" ? "#333" : "#ffffff",
              backgroundColor: theme === "light" ? "#fff" : "#333",
            }}
          />
          <ThemeSwitcher />
          <LogOut />
        </div>
        <Navigation flexdirection="column" marginBottom="20px" />
      </div>
    </div>
  );
}
