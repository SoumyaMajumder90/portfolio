import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about'>
        <div className="aboutleft"><h1>Contact</h1></div>
        <div className="aboutright">
        <img src={require('./insta.png')} />
        <a href="">Instagram</a>
        <img src={require('./linkedin.png')} />
        <a href="https://www.linkedin.com/in/soumya-majumder-a08710194/">LinkedIN</a>
        </div>
        

    </div>
  )
}
