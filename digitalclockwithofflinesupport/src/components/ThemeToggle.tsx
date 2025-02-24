"use client";

import { useEffect, useState } from "react";

/**
 * A theme toggle button that switches the page's theme between light and dark modes.
 * The button's state is persisted in local storage, and it also responds to the
 * user's system-level dark mode preference.
 */
export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check local storage for dark mode preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);
  // Sync the theme with the document and local storage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);
  // Toggle the theme function
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <button
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-300"
      onClick={handleThemeToggle}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      {isDarkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
