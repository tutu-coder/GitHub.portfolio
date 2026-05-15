"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ProjectsSection() {

const videoRef = useRef<HTMLVideoElement | null>(null);

const isInView = useInView(videoRef, {
  once: false,
  amount: 0.5,
});

useEffect(() => {
  if (!videoRef.current) return;

  if (isInView) {
    videoRef.current.play();
  } else {
    videoRef.current.pause();
  }
}, [isInView]);

  return (
    <section id="work" className="py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* 🔥 VIDEO SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Our Work in Motion
          </h2>

          <div className="rounded-xl overflow-hidden border border-gray-800 bg-black shadow-2xl">

<video
  ref={videoRef}
  className="w-full aspect-video object-cover"
  muted
  loop
  playsInline
  preload="auto"
>
  <source src="/Showcase.mp4" type="video/mp4" />
</video>

          </div>

          <p className="text-center text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A quick showcase of the interfaces, animations, and systems I build —
            focused on real business impact and smooth user experience.
          </p>
        </motion.div>

        {/* 🔥 PROJECTS TITLE */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white"
        >
          Selected Projects
        </motion.h2>

        <div className="space-y-14">

          {/* PROJECT 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

             {/* Left */}
<div className="space-y-5">
  <h3 className="text-xl md:text-2xl font-bold text-white">
    EB Motors – Car Dealership Website Demo
  </h3>

  <p className="text-gray-400 text-sm md:text-base">
    A modern dealership website concept designed for EB Motors, focused on showcasing vehicle inventory,
    improving online presence, and generating high-quality buyer leads through a clean, fast browsing experience.
  </p>

  <div className="grid grid-cols-2 gap-6">
    <div>
      <h4 className="text-sm font-semibold text-blue-400 mb-2">
        Frontend
      </h4>
      <ul className="text-sm text-gray-400 space-y-1">
        <li>• Premium car listing UI</li>
        <li>• Mobile-first responsive design</li>
        <li>• Fast, smooth browsing experience</li>
      </ul>
    </div>

    <div>
      <h4 className="text-sm font-semibold text-purple-400 mb-2">
        Features
      </h4>
      <ul className="text-sm text-gray-400 space-y-1">
        <li>• Vehicle showcase layout</li>
        <li>• Lead generation focus (calls & inquiries)</li>
        <li>• Structured for future inventory system</li>
      </ul>
    </div>
  </div>
</div>
              {/* Right */}
              <div className="flex flex-col justify-center gap-3">
                <h4 className="text-sm text-gray-400">Links</h4>

                <a
                  href="https://ebmotors.vercel.app/"
                  target="_blank"
                  className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition text-sm w-fit"
                >
                  View Website
                </a>

              </div>
            </div>
          </motion.div>

{/* PROJECT 2 */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
>
  <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

    <div className="space-y-5">
      <h3 className="text-xl md:text-2xl font-bold text-white">
        WitsTutor – Tutoring Marketplace Platform
      </h3>

      <p className="text-gray-400 text-sm md:text-base">
        A full-stack tutoring marketplace connecting students with tutors at Wits and beyond.
        Built to enable tutor discovery, profile management, and structured service listings for academic support.
      </p>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <h4 className="text-sm font-semibold text-blue-400 mb-2">
            Frontend
          </h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>• Clean marketplace UI</li>
            <li>• Search & filtering system</li>
            <li>• Responsive mobile-first design</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-purple-400 mb-2">
            Backend
          </h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>• Supabase authentication</li>
            <li>• Tutor profiles & listings</li>
            <li>• Ratings & review system</li>
          </ul>
        </div>

      </div>
    </div>

    <div className="flex flex-col justify-center gap-3">
      <h4 className="text-sm text-gray-400">Links</h4>

      <a
        href="https://www.witstutor.co.za/services"
        target="_blank"
        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition text-sm w-fit"
      >
        View Platform
      </a>
    </div>

  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}