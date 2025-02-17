import React from 'react';

// CSS
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className='Navbar'>
            <nav>
                <a href="#" style={{ display: "flex" }}>
                    <img src="/logo.svg" alt="logo" style={{ width: 94 }} />
                </a>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#solutions">Solutions</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="https://www.gitbook.com/" target='_blank'>Docs</a></li>
                </ul>
                <a href="#join" className="wait">Join waitlist</a>
            </nav>
        </div>
    )
}

export default Navbar