import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full h-16 flex items-center px-4 
  ${theme === "light" ? "bg-gray-300 text-black" : "bg-blue-700 text-white"}
`}
    >
      <h1 className="text-3xl font-bold">Header</h1>
      <Link to="/" className="ml-6 text-lg font-medium hover:underline">
        Home
      </Link>
      <Link to="/about" className="ml-6 text-lg font-medium hover:underline">
        About
      </Link>
      <Link to="/contact" className="ml-6 text-lg font-medium hover:underline">
        Contact
      </Link>
      <Link to="/movies" className="ml-6 text-lg font-medium hover:underline">
        Movies
      </Link>
      <div className="grow"></div>
      <button
        className="px-4 py-1 rounded text-xl font-bold bg-green-600 text-white"
        onClick={toggleTheme}
      >
        Toggle
      </button>
    </div>
  );
};

export default Header;
