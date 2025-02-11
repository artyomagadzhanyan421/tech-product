import React from 'react';

// CSS
import "../styles/Features.css";

function Features() {
    return (
        <div className='Block featuresBlock'>
            <center><p className='subHead'>Features</p></center>
            <center><p className="heading blockHeading">It’s packed with all you need</p></center>
            <center>
                <p className="desc blockDesc">Discover our features designed to make your workflow simpler, smarter, and more effective. Explore how we help you achieve more with ease.</p>
            </center>

            <div className="features">
                <div className="feature">
                    <div>
                        <p className="featureHead">Sharing and Collaboration</p>
                        <p className="featureDesc">Work together seamlessly with real-time sharing and collaborative tools. Empower your team to contribute, communicate, and achieve goals—no matter where they are.</p>
                    </div>
                    <div className="featureImg">
                        <img src="/features/f1.avif" alt="image" style={{ width: "100%" }} />
                    </div>
                </div>

                <div className="feature">
                    <div>
                        <p className="featureHead">Task Management</p>
                        <p className="featureDesc">Stay organized and in control with intuitive task management. Prioritize, track, and complete tasks efficiently, ensuring nothing falls through the cracks.</p>
                    </div>
                    <div className="featureImg">
                        <img src="/features/f2.avif" alt="image" style={{ width: "100%" }} />
                    </div>
                </div>
                
                <div className="feature">
                    <div>
                        <p className="featureHead">Logic and Automation</p>
                        <p className="featureDesc">Streamline your workflow with intelligent logic and powerful automation. Save time by automating repetitive tasks, so you can focus on what matters most.</p>
                    </div>
                    <div className="featureImg">
                        <img src="/features/f3.avif" alt="image" style={{ width: "100%" }} />
                    </div>
                </div>
                                
                <div className="feature">
                    <div>
                        <p className="featureHead">Integrations</p>
                        <p className="featureDesc">Connect effortlessly with the tools you already use. With versatile integrations, bring all your apps together for a unified, productive experience.</p>
                    </div>
                    <div className="featureImg">
                        <img src="/features/f4.avif" alt="image" style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features