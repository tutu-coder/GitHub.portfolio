"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "@fontsource/space-grotesk/700.css";

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const [showContact, setShowContact] = useState(false);
  const [selectedStack, setSelectedStack] = useState<
    "frontend" | "backend" | "devops" | null
  >(null);

  return (
    <section className="relative overflow-hidden py-16 md:py-12">
      {/* Background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      {/* Glow (smaller) */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-purple-500/30 via-cyan-500/20 to-pink-500/30 blur-3xl"
      />

      {/* Floating grid */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-100, -700],
            x: [0, Math.random() * 160 - 80],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-20px",
          }}
        />
      ))}

      {/* Main content wrapper (FIXED spacing + centered layout) */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-6xl font-bold leading-[1.2] mb-4">
          <span className="inline-block pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
            Knightly Digital
          </span>
        </h1>

        {/* Big animated heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-[7rem] font-black leading-none"
        >
          <span className="block">BUILDING</span>

          <motion.span
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:300%_300%]"
          >
            DIGITAL
          </motion.span>

          <span className="block">EXPERIENCES</span>
        </motion.h1>

        {/* Description */}
        <p className="mt-5 text-gray-400 max-w-xl mx-auto text-base md:text-lg">
          Websites that feel alive. Smooth motion, immersive UI, and experiences
          people actually remember.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition"
          >
            View Work
          </a>

<button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
>
  Get a Website
</button>

        </motion.div>

        {/* Services */}
        <div className="mt-12 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Websites */}
              <div
                className={`p-4 rounded-lg border transition ${
                  selectedStack === "frontend"
                    ? "bg-blue-500/20 border-blue-500/50"
                    : "bg-gray-800/50 border-transparent hover:bg-gray-800/80"
                }`}
                onMouseEnter={() => setSelectedStack("frontend")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-400">
                  Websites
                </h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>Fast, responsive design</li>
                  <li>Conversion focused</li>
                  <li>Modern tech stack</li>
                </ul>
              </div>

              {/* Platforms */}
              <div
                className={`p-4 rounded-lg border transition ${
                  selectedStack === "backend"
                    ? "bg-purple-500/20 border-purple-500/50"
                    : "bg-gray-800/50 border-transparent hover:bg-gray-800/80"
                }`}
                onMouseEnter={() => setSelectedStack("backend")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg font-semibold mb-2 text-purple-400">
                  Platforms
                </h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>Web apps & dashboards</li>
                  <li>Auth & databases</li>
                  <li>Scalable systems</li>
                </ul>
              </div>

              {/* Support */}
              <div
                className={`p-4 rounded-lg border transition ${
                  selectedStack === "devops"
                    ? "bg-teal-500/20 border-teal-500/50"
                    : "bg-gray-800/50 border-transparent hover:bg-gray-800/80"
                }`}
                onMouseEnter={() => setSelectedStack("devops")}
                onMouseLeave={() => setSelectedStack(null)}
              >
                <h3 className="text-lg font-semibold mb-2 text-teal-400">
                  Support
                </h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>Hosting setup</li>
                  <li>Performance tuning</li>
                  <li>Ongoing updates</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-8 max-w-sm w-full text-center relative">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Me</h3>
            <p className="text-gray-400 mb-6">Email me at:</p>
            <a
              href="mailto:tutumbuyisa9@gmail.com"
              className="text-blue-400 hover:underline font-medium"
            >
              tutumbuyisa9@gmail.com
            </a>
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}