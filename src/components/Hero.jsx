import React from 'react';

// CSS
import "../styles/Hero.css";

function Hero() {
  let span = {
    fontSize: 16,
    fontWeight: 550
  }

  return (
    <div className="heroBlock" style={{ position: "relative" }}>
      <div className='Hero'>
        <center><p className='subHead'>More than a platform</p></center>
        <center><p className="heading">Transform the way you work</p></center>
        <center>
          <p className="desc">Empower your team with an all-in-one solution designed to streamline workflows, boost collaboration, and drive productivity.</p>
        </center>
        <div className="links">
          <a href="#" className="wait">Join waitlist</a>
          <a href="#" className="wait">See docs</a>
        </div>

        <center>
          <div className="heroImg">
            <img src="/hero/hero.avif" alt="image" />
          </div>
        </center>

        <div className="logos">
          <center><span style={span}>Used by great teams</span></center>
          <div>
            <img src="/hero/l1.svg" alt="image" />
            <img src="/hero/l2.svg" alt="image" />
            <img src="/hero/l3.svg" alt="image" />
            <img src="/hero/l4.svg" alt="image" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero