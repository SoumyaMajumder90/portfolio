import React, { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const textToType = "My name is Soumya Majumder. I am a full stack developer.";

    let index = 0;

    const typingInterval = setInterval(() => {
      setTypedText((prevText) => prevText + textToType[index]);
      index++;

      if (index === textToType.length) {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed by changing the interval

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className='home'>
      <div className="lefthome">
        <img src={require('./prf.jpeg')} alt="Profile" />
      </div>

      <div className="righthome">
        <h1 className="blinking-text">Hello!</h1>
        <p>{typedText}</p>
      </div>
    </div>
  );
}