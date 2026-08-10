"use client";

import { useState } from "react";
import AnimatedTitleText from "../components/AnimatedTitleText/AnimatedTitleText";
import CommentText from "../components/CommentText/CommentText";
import "./page.scss";
import { contactSchema } from "../schemas/contactSchema";
import { Copy, ExternalLink } from "lucide-react";

const contactInfo = [
    {
        id: 1,
        socialMedia: "Email",
        contactText: "dashaklsh1507@gmail.com",
        buttonText: "Copy"
    },
    {
        id: 2,
        socialMedia: "Telegram",
        contactText: "@cooleshd",
        buttonText: "Copy"
    },
    {
        id: 3,
        socialMedia: "GitHub",
        contactText: "github.com/dariakulish1",
        buttonText: "Open"
    },
    {
        id: 4,
        socialMedia: "LinkedIn",
        contactText: "Daria Kulish",
        buttonText: "Open"
    },
]

export default function ContactsPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        message?: string;
    }>({});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse({
        name,
        email,
        message,
    });

    if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;

        setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
        });

        return;
    }

    setErrors({});

    try {
        setIsSending(true);
        setStatus("");

        const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            message,
        }),
        });

        const data = await response.json();

        if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
        }

        setName("");
        setEmail("");
        setMessage("");

        setStatus("Message sent successfully!");
    } catch (error) {
        console.error(error);
        setStatus("Something went wrong. Please try again.");
    } finally {
        setIsSending(false);
    }
    };

    return (
        <div className="contacts-container">
            <CommentText text="let's work together" />
            <AnimatedTitleText text="Contacts" />
            <div className="contacts-container__description-container">
                <div className="contacts-container__text-marker" />
                <p className="contacts-container__description-text">
                Fill in the form below and it goes <span style={{ color: "#09131E" }}>straight to my inbox</span> — no need to open your own email client. Prefer something more direct? My email, Telegram and GitHub are on the right, all one click or copy away.</p>
            </div>
            <div className="contacts-container__contact-form-info"> 
                
                <div className="w-full">
                    <form onSubmit={handleSubmit} className="contacts-container__contact-form-box">
                        <p className="text-[19px] font-bold mb-2">Send me a message</p>
                        <p className="text-sm text-[#AFB8C3]">Tell me a bit about the role, project, or what you&#39;d like to ask — I read every message and usually reply within a day or two.</p>
                        <div className="flex flex-col w-full gap-3 mt-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Name</label>
                                <input 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}  
                                    name="name" 
                                    className="contacts-container__form-input" 
                                    type="text" 
                                    placeholder="What should I call you?" 
                                    required />
                                {errors.name && (
                                    <p className="text-sm text-red-500">
                                    {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Email</label>
                                <input 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                    name="email" 
                                    className="contacts-container__form-input" 
                                    type="text" 
                                    placeholder="you@example.com" 
                                    required />
                                {errors.email && (
                                    <p className="text-sm text-red-500">
                                    {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-sm">Message</label>
                                <textarea 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} 
                                    name="message" 
                                    className="contacts-container__form-textarea" 
                                    placeholder="Describe your project, role, or questions in detail..." 
                                    required />
                                {errors.message && (
                                    <p className="text-sm text-red-500">
                                    {errors.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <button 
                            disabled={isSending}
                            type="submit" 
                            className="contacts-container__send-form-btn"
                        >
                           {isSending ? "Sending..." : "Send message"}
                        </button>
                        {status && (
                            <p className="mt-3 text-sm">
                                {status}
                            </p>
                        )}
                    </form>
                </div>
                <div className="contacts-container__contact-info-container">
                    {contactInfo.map((contact) => (
                        <div key={contact.id} className="contacts-container__contact-info-box">
                            <div className="flex flex-row center justify-between">
                                <div>
                                    <p className="text-[16px] font-bold mb-2">{contact.socialMedia}</p>
                                    <p>{contact.contactText}</p>
                                </div>
                                {contact.buttonText === "Copy" ? 
                                <button onClick={async () => {
                                    await navigator.clipboard.writeText(contact.socialMedia === "Email" ? "dashaklsh1507@gmail.com" : "@cooleshd");
                                    }} 
                                    className="contacts-container__contact-info-btn"><span>{contact.buttonText}</span><Copy size={15} /></button>
                                :
                                <a href={contact.socialMedia === "GitHub" ? "https://github.com/dariakulish1" : "https://www.linkedin.com/in/daria-kulish-5a4a66257/"} className="contacts-container__contact-info-btn">
                                    <span>{contact.buttonText}</span>
                                    <ExternalLink size={15} />
                                </a>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}