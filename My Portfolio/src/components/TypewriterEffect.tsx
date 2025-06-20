// components/TypewriterLoop.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterLoopProps {
    texts: string[];
    speed?: number; // Speed per character (ms)
    pause?: number; // Delay before erasing (ms)
    className?: string;
}

const TypewriterLoop = ({
    texts,
    speed = 100,
    pause = 1500,
    className = "",
}: TypewriterLoopProps) => {
    const [displayed, setDisplayed] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        const fullLength = currentText.length;

        const updateText = () => {
            setDisplayed((prev) => {
                if (isDeleting) {
                    return prev.slice(0, -1);
                } else {
                    return currentText.slice(0, prev.length + 1);
                }
            });

            if (!isDeleting && displayed === currentText) {
                setTimeout(() => setIsDeleting(true), pause);
            } else if (isDeleting && displayed === "") {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const interval = setTimeout(updateText, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(interval);
    }, [displayed, isDeleting, texts, textIndex, speed, pause]);

    return (
        <motion.span
            className={`whitespace-pre text-xl text-gray-900 ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {displayed}
            <span className="animate-blink">|</span>
        </motion.span>
    );
};

export default TypewriterLoop;
