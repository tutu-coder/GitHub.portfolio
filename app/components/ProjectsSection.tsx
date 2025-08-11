'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Full Stack Projects
        </motion.h2>

        <div className="space-y-16">
          {/* Services Marketplace */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Description */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Services Marketplace</h3>
                    <p className="text-gray-400">
                      A Bark-style platform where users find local service providers, complete with ratings and reviews.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Next.js & React</li>
                        <li>• TailwindCSS UI</li>
                        <li>• Client/Provider Flow</li>
                        <li>• Responsive Design</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Backend</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Supabase Auth & DB</li>
                        <li>• Public/Private Routes</li>
                        <li>• Rating System</li>
                        <li>• Provider Profile System</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">Highlights</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• MVP Completed</li>
                      <li>• Clean UX with filters & search</li>
                      <li>• EmailJS integration</li>
                    </ul>
                  </div>
                </div>

                {/* Right Side - Links */}
                <div className="flex flex-col justify-center items-start gap-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Project Links</h4>
                  <a
                    href="https://near-me-weld.vercel.app/"
                    target="_blank"
                    className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/tutu-coder/NearMe"
                    target="_blank"
                    className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition text-sm"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Knightly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Knightly</h3>
                    <p className="text-gray-400">
                      A TikTok-style video sharing platform with full-screen vertical scroll and public creator profiles.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• React + Next.js</li>
                        <li>• Fullscreen Video Scroll</li>
                        <li>• Comments Section</li>
                        <li>• Autoplay & Pause on Scroll</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Backend</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Supabase DB + Storage</li>
                        <li>• Auth + Profiles</li>
                        <li>• Video Upload & Streaming</li>
                        <li>• Creator Profiles</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">Highlights</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Public Profile Pages</li>
                      <li>• Vertical Feed like TikTok</li>
                      <li>• Responsive for Mobile & Desktop</li>
                    </ul>
                  </div>
                </div>

                {/* Right Side - Links */}
                <div className="flex flex-col justify-center items-start gap-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Project Links</h4>
                  <a
                    href="https://knightly-gfgf.vercel.app/"
                    target="_blank"
                    className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/tutu-coder/Knightly"
                    target="_blank"
                    className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 transition text-sm"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* NovaSmarts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">NovaSmarts</h3>
                    <p className="text-gray-400">
                      A sleek business site for a construction & renovation company. Fully responsive with modern layout.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Next.js + React</li>
                        <li>• TailwindCSS Styling</li>
                        <li>• Scroll Animations</li>
                        <li>• Contact & About Pages</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Backend</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Static Site</li>
                        <li>• Hosted on Vercel</li>
                        <li>• SEO Friendly</li>
                        <li>• Fast Load Times</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400">Highlights</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Clean Visual Design</li>
                      <li>• Built for Real Client</li>
                      <li>• Mobile Optimized</li>
                    </ul>
                  </div>
                </div>

                {/* Right Side - Links */}
                <div className="flex flex-col justify-center items-start gap-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Project Links</h4>
                  <a
                    href="https://novasmarts.co.za/"
                    target="_blank"
                    className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition text-sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
