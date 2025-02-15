import React from "react";
import useTeam from "../hooks/useTeam";

// CSS
import "../styles/Team.css";

// Boxicons
import "boxicons";

function Team() {
    const teamMembers = useTeam(); 

    return (
        <div className="Block teamBlock" id="team">
            <center>
                <p className="subHead">Team</p>
            </center>
            <center>
                <p className="heading blockHeading">Meet our team</p>
            </center>
            <center>
                <p className="desc blockDesc">
                    Behind every feature and innovation is a passionate team committed to delivering the best. We are dedicated to constantly improving our product to meet your needs and exceed your expectations.
                </p>
            </center>

            <div className="team">
                {teamMembers.map((member, index) => (
                    <div className="member" key={index}>
                        <img src={member.image} alt={member.name} />
                        <p style={{ fontSize: 18, fontWeight: 550 }}>{member.name}</p>
                        <p style={{ color: "#ffffffb3", marginTop: 7 }}>{member.role}</p>
                        <div className="socials">
                            <a href="#">
                                <box-icon type="logo" color="white" name="linkedin-square"></box-icon>
                            </a>
                            <a href="#">
                                <box-icon name="twitter" type="logo" color="white"></box-icon>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;