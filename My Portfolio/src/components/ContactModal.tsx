import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setLoading(true);

        emailjs
            .sendForm(
                "service_o3qqko9", // your service ID
                "template_n619zyb", // your template ID
                form.current,
                "P3nB94oQqVr5wTL9U" // your public key
            )
            .then(() => {
                alert("Message sent!");
                form.current?.reset();
                onClose();
            })
            .catch((error) => {
                alert("Failed to send message.");
                console.error(error);
            })
            .finally(() => setLoading(false));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 p-4 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6 relative animate-fadeIn">
                <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-bold text-center">
                        Contact me
                    </h2>
                    <button onClick={onClose} className="">
                        X
                    </button>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your name..."
                        className="w-full border border-gray-200 p-2 px-4 rounded-lg text-sm"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your email..."
                        className="w-full border border-gray-200 p-2 px-4 rounded-lg text-sm"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message..."
                        className="w-full border border-gray-200 p-2 px-4 rounded-lg text-sm"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-sm text-white p-2 rounded hover:bg-gray-900 disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
