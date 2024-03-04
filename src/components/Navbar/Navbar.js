import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

import { useSpring, animated } from 'react-spring';


const Navbaranime = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const navigate = useNavigate();
  return (
    <animated.div style={fade}>
      <div className="topbar">
        <div className="left">
          <a href="https://www.linkedin.com/in/soumya-majumder-a08710194/"><img src={require('./linkedin.png')} alt="" /></a>
          <span>Soumya Majumder</span>
        </div>
        <div className="right">
          <button>Home</button>
          <button onClick={() => navigate('/description')}>About</button>
         
        </div>
      </div>
    </animated.div>
  );
};

export default Navbaranime;
