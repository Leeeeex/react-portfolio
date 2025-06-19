// components/Accordion.tsx
import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
}

export const AccordionItem = ({
    title,
    children,
    defaultOpen = false,
}: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="bg-gray-300 rounded-md mb-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-4 py-2 font-medium text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 "
            >
                <span>{title}</span>
                <ChevronDown
                    className={`transition-transform duration-200 w-4 h-4 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>
            {isOpen && (
                <div className="p-4 border-t border-gray-400 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                    {children}
                </div>
            )}
        </div>
    );
};
