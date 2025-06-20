// components/ContactForm.tsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                "service_o3qqko9", // Replace with your EmailJS Service ID
                "template_n619zyb", // Replace with your Template ID
                form.current,
                "P3nB94oQqVr5wTL9U" // Replace with your Public Key (User ID)
            )
            .then(
                () => {
                    alert("Message sent!");
                    form.current?.reset();
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                    console.error(error);
                }
            );
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 max-w-md mx-auto p-4 border rounded-md shadow"
        >
            <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full border p-2 rounded"
                required
            />
            <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full border p-2 rounded"
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                className="w-full border p-2 rounded"
                required
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
