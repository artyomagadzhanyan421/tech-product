// useFaqToggle.js
import { useState } from "react";

function useFaqToggle() {
    const questions = [
        { question: "What is the Product, and how does it work?", answer: "The Product is an all-in-one solution designed to help businesses streamline workflows, collaborate effectively, and gain valuable insights. Learn more about how it can fit your needs by exploring our features." },
        { question: "Is my data secure with the Product?", answer: "Yes, your data is fully secure. We use industry-leading encryption and security measures to ensure that your information remains protected at all times." },
        { question: "Can I integrate the Product with other tools I use?", answer: "Absolutely! The Product seamlessly integrates with a wide range of tools, allowing you to connect your existing software and streamline your workflow." },
        { question: "Do you offer a free trial or demo?", answer: "Yes, we offer a free trial and demo so you can explore all the features of the Product before committing. Get started today and see how it works for you." },
        { question: "What kind of support does the Product provide?", answer: "We provide comprehensive support, including live chat, email assistance, and an extensive knowledge base. Our team is here to help you every step of the way." },
    ];

    const [openFaqs, setOpenFaqs] = useState({});

    const toggleFaq = (index) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return { questions, openFaqs, toggleFaq };
}

export default useFaqToggle;