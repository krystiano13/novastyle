import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Contact } from "./views/Contact";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export { App };
