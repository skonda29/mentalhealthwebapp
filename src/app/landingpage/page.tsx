"use client";
import { Calendar, MessageCircle, BookOpen, ChevronRight, UserPlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {useState} from "react";
import { sendChatMessage } from "../../lib/api";
import { useRef, useEffect } from "react";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function LandingPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  const handleSend = async () => {
    if (!input.trim()) return;
  
    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
  
    try {
      const response = await sendChatMessage(input);
      const botMessage: Message = { role: "bot", text: response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  
    setInput("");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <header className="p-4 bg-white bg-opacity-10 backdrop-blur-md">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">ReachOut</Link>
          <div className="space-x-4">
            <Link href="#features" className="text-white hover:text-green-200 transition-colors">Features</Link>
            <Link href="/about" className="text-white hover:text-green-200 transition-colors">About</Link>
            <Link href="#contact" className="text-white hover:text-green-200 transition-colors">Contact</Link>
            <Link href="/signinpage">
  <button className="bg-white bg-opacity-20 text-white hover:bg-white hover:text-blue-500 px-4 py-2 rounded">
    Sign In
  </button>
</Link>

          </div>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold text-white mb-6">Balance Your Career and Mental Well-being</h1>
              <p className="text-xl text-white mb-8">Tailored support for working professionals aged 30-45, because your mental health is as important as your career.</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/journeystart">
                  <button className="bg-white text-blue-500 hover:bg-green-100 px-6 py-3 rounded-lg flex items-center justify-center">
                    Start Your Journey
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
                <Link href="/bookappointment">
                  <button className="bg-white hover:bg-green-100 px-6 py-3 rounded-lg flex items-center justify-center">
                    Book Consultation
                    <UserPlus className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/happyPhoto.png" 
                alt="Professional seeking mental health support" 
                width={400} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-10">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="h-8 w-8 mr-2" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.9999 10C20.9999 17 11.9999 23 11.9999 23C11.9999 23 2.99994 17 2.99994 10C2.99994 7.61305 3.94815 5.32387 5.63603 3.63604C7.32392 1.94821 9.61303 1 11.9999 1C14.3869 1 16.676 1.94821 18.3639 3.63604C20.0517 5.32387 20.9999 7.61305 20.9999 10Z" />
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" />
              </svg>
              <span>Licensed Therapists</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <svg className="h-8 w-8 mr-2" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" />
                <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" />
              </svg>
              <span>Accredited by APA</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <svg className="h-8 w-8 mr-2" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span>4.9/5 User Rating</span>
            </motion.div>
          </div>
        </section>

        <section id="features" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-md text-white border-none p-6 rounded-lg">
              <div className="mb-4">
                <Calendar className="h-10 w-10 mb-3 text-green-800" />
                <h3 className="text-2xl font-bold">Flexible Appointments</h3>
                <p className="text-white">Schedule sessions that fit your busy lifestyle</p>
              </div>
              <p>Book therapy sessions that work around your professional commitments, including early morning and evening slots.</p>

            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-md text-white border-none p-6 rounded-lg">
              <div className="mb-4">
                <MessageCircle className="h-10 w-10 mb-3 text-blue-600" />
                <h3 className="text-2xl font-bold">AI Coach</h3>
                <p className="text-white">24/7 support for work-life balance</p>
              </div>
              <p>Get immediate assistance with stress management, career guidance, and work-related mental health concerns.</p>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-md text-white border-none p-6 rounded-lg">
              <div className="mb-4">
                <BookOpen className="h-10 w-10 mb-3 text-yellow-300" />
                <h3 className="text-2xl font-bold">Professional Growth Blog</h3>
                <p className="text-white">Resources for career and mental wellness</p>
              </div>
              <p>Access expert advice on maintaining mental health while advancing your career, managing workplace stress, and achieving work-life balance.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
  <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8">
    <h2 className="text-3xl font-bold text-white mb-4">Chat with ReachOut AI Coach</h2>

    {messages.map((msg, idx) => (
  <div key={idx} className={`mb-3 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
    <div
      className={`p-3 rounded-lg ${msg.role === "user" ? "bg-blue-100 text-black" : "bg-green-100 text-black"}`}
      style={{
        maxWidth: "75%",
        display: "inline-block",
        wordWrap: "break-word",
      }}
    >
      <span className="whitespace-pre-line">{msg.text}</span>
    </div>
  </div>
))}

{/* Add the scroll anchor here */}
<div ref={messagesEndRef} />

    {/* Input and button */}
    <div className="flex">
      <input
        type="text"
        placeholder="Describe your work-related concern..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow rounded-l-md p-2 bg-white bg-opacity-50 text-blue-900 placeholder-blue-700"
      />
      <button
        onClick={handleSend}
        className="rounded-l-none bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white"
      >
        Send
      </button>
    </div>
  </div>
</section>




        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah T.",
                role: "Marketing Executive",
                quote: "ReachOut has been a game-changer for my work-life balance. The flexible appointments and AI coach have helped me manage stress effectively."
              },
              {
                name: "Michael R.",
                role: "Software Engineer",
                quote: "As a tech professional, I appreciate the data-driven approach ReachOut takes to mental health. It's made a significant impact on my overall well-being."
              },
              {
                name: "Emily L.",
                role: "HR Manager",
                quote: "The resources and support provided by ReachOut have not only helped me personally but also improved how I support my team's mental health."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-20 backdrop-blur-md text-white border-none p-6 rounded-lg">
                <Image 
                  src="/placeholder.svg" 
                  alt={`${testimonial.name}'s profile`} 
                  width={100} 
                  height={100} 
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-white text-sm mb-2">{testimonial.role}</p>
                <p className="italic">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white bg-opacity-10 backdrop-blur-md text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">ReachOut</h3>
              <p>Your partner in professional and mental wellness</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-green-200 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-green-200 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-green-200 transition-colors">Contact Us</Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2025 ReachOut. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
