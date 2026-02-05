import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-[calc(100vh-4rem)] p-6
        ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}
      `}
    >
      <h2 className="text-3xl font-bold mb-4">
        Welcome to Product Store
      </h2>

      <p className="text-lg mb-6">
        This is a simple demo application to understand how 
        <span className="font-semibold"> React Context </span>
        works for global state like theme switching.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded bg-white text-black shadow">
          <h3 className="font-bold mb-2">Fast</h3>
          <p>Built using Vite and React for fast performance.</p>
        </div>

        <div className="p-4 rounded bg-white text-black shadow">
          <h3 className="font-bold mb-2">Simple</h3>
          <p>Minimal code focusing on core React concepts.</p>
        </div>

        <div className="p-4 rounded bg-white text-black shadow">
          <h3 className="font-bold mb-2">Scalable</h3>
          <p>Uses Context for clean and scalable state management.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
