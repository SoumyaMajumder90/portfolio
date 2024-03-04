import React from 'react';
import './App.css';
import { useSpring, animated } from 'react-spring';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, config: {duration: 3000} });

  return (
    <animated.div style={fade}>
      <Navbar />
      
      <Home />
      
      <Projects />
      
      <About />
    </animated.div>
  );
};

export default App;


