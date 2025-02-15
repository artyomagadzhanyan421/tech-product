import { useState } from "react";

const useSolutions = () => {
    const [solutions] = useState([
        {
            img: "/solutions/s1.avif",
            title: "Operations",
            description: "Streamline processes, improve efficiency, and ensure seamless collaboration across your team."
        },
        {
            img: "/solutions/s2.avif",
            title: "Marketing",
            description: "Boost campaign effectiveness, track performance, and collaborate effortlessly, all in one place."
        },
        {
            img: "/solutions/s3.avif",
            title: "Development",
            description: "Enhance productivity, automate workflows, and integrate seamlessly with existing tools."
        }
    ]);

    return solutions;
};

export default useSolutions;