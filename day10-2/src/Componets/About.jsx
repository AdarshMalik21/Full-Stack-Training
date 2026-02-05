import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-[calc(100vh-4rem)] p-6
        ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}
      `}
    >
      <h2 className="text-3xl font-bold mb-4">
        About This Project
      </h2>

      <p className="text-lg mb-6">
        This application is built to strengthen the understanding of
        <span className="font-semibold"> React Hooks </span>
        like <span className="font-semibold">useState</span>,
        <span className="font-semibold"> useContext</span>, and
        <span className="font-semibold"> useReducer</span>.
      </p>

      <div className="space-y-4">
        <div className="p-4 rounded bg-white text-black shadow">
          <h3 className="font-bold mb-2">Why Context?</h3>
          <p>
            Context helps manage global state such as theme and language
            without passing props through many components.
          </p>
        </div>

        <div className="p-4 rounded bg-white text-black shadow">
          <h3 className="font-bold mb-2">Learning Focus</h3>
          <p>
            The goal is to build strong fundamentals by understanding how
            React handles state, effects, and re-renders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
