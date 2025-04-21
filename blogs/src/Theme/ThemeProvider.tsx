import { useState, createContext, ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const defaultContextValue: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultContextValue);

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "night" : "light"));
  };

  const value = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
