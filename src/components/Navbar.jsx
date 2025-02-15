import React from 'react';

// CSS
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div>
            <br />
            <nav>
                <a href="#" style={{ display: "flex" }}>
                    <img src="/logo.svg" alt="logo" style={{ width: 94 }} />
                </a>
                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#solutions">Solutions</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Docs</a></li>
                </ul>
                <a href="#" className="wait">Join waitlist</a>
            </nav>
        </div>
    )
}

export default Navbar