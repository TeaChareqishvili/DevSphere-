import { useState, createContext, ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
  headerTheme: string;
};

const defaultContextValue: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
  headerTheme: "header-light",
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultContextValue);

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("light");
  const [headerTheme, setHeaderTheme] = useState("header-light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "night" : "light"));
    setHeaderTheme((prevTheme) =>
      prevTheme === "header-light" ? "header-night" : "header-light"
    );
  };

  const value = {
    theme: theme,
    toggleTheme: toggleTheme,
    headerTheme: headerTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
