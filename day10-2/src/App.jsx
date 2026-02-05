import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Componets/Header";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Contact from "./Componets/Contact";
import Movies from "./Componets/movies/Movies"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
