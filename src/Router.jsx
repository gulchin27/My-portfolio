import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Myprojects";
import Contact from "./components/Contact";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
