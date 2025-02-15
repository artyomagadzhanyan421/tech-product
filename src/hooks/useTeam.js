import { useState } from "react";

const useTeam = () => {
    const [members] = useState([
        {
            name: "Sophia Bennett",
            role: "Co-Founder & CEO",
            image: "/team/m1.jpg",
        },
        {
            name: "Camila Torres",
            role: "Co-Founder & CFO",
            image: "/team/m2.jpg",
        },
        {
            name: "Mateo Rivera",
            role: "Co-Founder & CTO",
            image: "/team/m3.jpg",
        },
        {
            name: "Ethan Thompson",
            role: "Lead Designer",
            image: "/team/m4.jpg",
        },
        {
            name: "Lisa Zhang",
            role: "Lead Developer",
            image: "/team/m5.jpg",
        },
        {
            name: "Mike Davis",
            role: "Engagement Lead",
            image: "/team/m6.jpg",
        },
    ]);

    return members;
};

export default useTeam;