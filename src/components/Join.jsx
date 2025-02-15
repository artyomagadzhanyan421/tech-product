import React from 'react';

// CSS
import "../styles/Join.css";

function Join() {
    return (
        <div className='Block joinBlock' id='join'>
            <center><p className='subHead' style={{ position: "relative", zIndex: 2 }}>WaiTlist</p></center>
            <center><p className="heading" style={{ position: "relative", zIndex: 2 }}>Join waitlist <br /><span style={{ color: "#ffffffb3" }}>Be the first to know</span></p></center>

            <form className='list'> 
                <input type="email" placeholder='Enter your email' required />
                <button type="submit">Join waitlist</button>
            </form>
        </div>
    )
}

export default Join