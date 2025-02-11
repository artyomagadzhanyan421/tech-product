// useFeatures.js
import { useState } from 'react';

const useFeatures = () => {
    const [features] = useState([
        {
            title: "Sharing and Collaboration",
            description: "Work together seamlessly with real-time sharing and collaborative tools. Empower your team to contribute, communicate, and achieve goals—no matter where they are.",
            image: "/features/f1.avif"
        },
        {
            title: "Task Management",
            description: "Stay organized and in control with intuitive task management. Prioritize, track, and complete tasks efficiently, ensuring nothing falls through the cracks.",
            image: "/features/f2.avif"
        },
        {
            title: "Logic and Automation",
            description: "Streamline your workflow with intelligent logic and powerful automation. Save time by automating repetitive tasks, so you can focus on what matters most.",
            image: "/features/f3.avif"
        },
        {
            title: "Integrations",
            description: "Connect effortlessly with the tools you already use. With versatile integrations, bring all your apps together for a unified, productive experience.",
            image: "/features/f4.avif"
        }
    ]);

    return features;
};

export default useFeatures;