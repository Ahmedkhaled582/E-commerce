"use client";
import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";

    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded-lg border hover:scale-105 transition hover:cursor-pointer"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}