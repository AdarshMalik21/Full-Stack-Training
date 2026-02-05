import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-[calc(100vh-4rem)] p-6
        ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}
      `}
    >
      <h2 className="text-3xl font-bold mb-4">
        Contact Us
      </h2>

      <p className="text-lg mb-6">
        Have questions or feedback?  
        This page demonstrates how global theme styling works
        consistently across different routes.
      </p>

      <div className="max-w-md space-y-4">
        <div className="p-4 rounded bg-white text-black shadow">
          <p>
            <span className="font-semibold">Email:</span> support@example.com
          </p>
        </div>

        <div className="p-4 rounded bg-white text-black shadow">
          <p>
            <span className="font-semibold">Phone:</span> +91 98765 43210
          </p>
        </div>

        <div className="p-4 rounded bg-white text-black shadow">
          <p>
            <span className="font-semibold">Address:</span> New Delhi, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
