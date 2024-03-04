
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import { useSpring, animated } from 'react-spring';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagenotfound from './Pagenotfound';
import Description from './pages/Description.js';
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter >
        <Routes>
          <Route exact path="/" element={<App/>} />
          <Route path="/description" element={<Description />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
