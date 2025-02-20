import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <button
            className="p-2 rounded bg-gray-700 text-white dark:bg-gray-300 dark:text-black"
            onClick={() => setDarkMode(!darkMode)}
        >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}