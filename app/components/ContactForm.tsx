"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    name: form.name,
    email: form.email,
    message: form.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  } catch (error) {
    console.error(error);
    alert("Failed to send message");
  }

  setLoading(false);

  setTimeout(() => setSuccess(false), 3000);
};

  return (
    <section id="contact" className="py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
        	<h2 className="text-3xl font-bold">Let&apos;s Build Something Amazing</h2>
					<p className="text-gray-400 max-w-2xl mx-auto">
						Looking for a full-stack developer who can design, build, and ship scalable Websites and apps? I’d love to hear from you.
					</p>
          
        </motion.h2>
<div className="relative z-10 flex flex-col items-center justify-center min-h-[5vh] px-6 text-center"></div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 space-y-5"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success message */}
          {success && (
            <p className="text-green-400 text-center text-sm">
              Message sent successfully 🚀
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}