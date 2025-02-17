import React from 'react';

// CSS
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='Block'>
            <footer>
                <div className="footerFlex">
                    <div>
                        <a href="#" style={{ display: "flex", width: "fit-content" }}>
                            <img src="/logo.svg" alt="logo" style={{ width: 94 }} />
                        </a>
                        <span>A leading SaaS provider committed to simplifying workflows, enhancing collaboration, and driving growth for businesses of all sizes.</span>
                    </div>
                    <div className='footerLinks'>
                        <ul>
                            <li>Product</li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Solutions</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Docs</a></li>
                        </ul>
                        <ul>
                            <li>Socials</li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">X</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footerFlexTwo">
                    <p className='copyright'>© 2025 <span>Lumify</span>. All Rights Reserved.</p>
                    <div>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer