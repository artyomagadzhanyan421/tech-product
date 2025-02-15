import React from 'react';

// CSS
import "../styles/Solutions.css";

function Solutions() {
    return (
        <div className='Block solutionsBlock' id='solutions'>
            <div className="sectionHead">
                <p className='subHead'>Solutions</p>
                <p className="heading blockHeading" style={{ maxWidth: "420px" }}>There is something for every team</p>
                <p className="desc blockDesc" style={{ maxWidth: "520px" }}>Discover how the platform meets your team's unique needs and helps you solve even most challenging tasks.</p>
            </div>

            <div className="solutions">
                <div className="solution">
                    <img src="/solutions/s1.avif" alt="image" style={{ width: "100%" }} />
                    <p className="featureHead solutionHead">Operations</p>
                    <p className="featureDesc">Streamline processes, improve efficiency, and ensure seamless collaboration across your team.</p>
                </div>
                <div className="solution">
                    <img src="/solutions/s2.avif" alt="image" style={{ width: "100%" }} />
                    <p className="featureHead solutionHead">Marketing</p>
                    <p className="featureDesc">Boost campaign effectiveness, track performance, and collaborate effortlessly, all in one place.</p>
                </div>
                <div className="solution">
                    <img src="/solutions/s3.avif" alt="image" style={{ width: "100%" }} />
                    <p className="featureHead solutionHead">Development</p>
                    <p className="featureDesc">Enhance productivity, automate workflows, and integrate seamlessly with existing tools.</p>
                </div>
            </div>
        </div>
    )
}

export default Solutions