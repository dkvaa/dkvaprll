import React from "react";
import "./themeToggle.css";

// Tipe Props untuk ThemeToggle
type ThemeToggleProps = {
  toggleTheme: () => void;
  currentTheme: "light" | "dark" | "gray";
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, currentTheme }) => {
  return (
    <button onClick={toggleTheme} className={`theme-toggle-button ${currentTheme}`}>
      Switch to {currentTheme === "light" ? "Dark" : currentTheme === "dark" ? "Gray" : "Light"} Theme
    </button>
  );
};

export default ThemeToggle;

