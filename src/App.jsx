import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";

import Navbar from "./components/Navbar";
import MotionBackground from "./components/MotionBackground";
import BackgroundMusic from "./components/BackgroundMusic";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";

function AnimatedRoutes(){
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App(){
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Raima_Deb_Resume.pdf";
    link.download = "Raima_Deb_Resume.pdf";
    link.click();
  };

  return (
    <Router>
      <MotionBackground />
      <BackgroundMusic />
      
      {/* Resume Button - Now visible on all pages */}
      <motion.button
        onClick={handleDownload}
        className="resume-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="resume-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
      </motion.button>
      
      <div className="app-container">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}