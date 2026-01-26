'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-white"
        >
          Selected Projects
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
                {/* Left Side */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">Services Marketplace – Lead Generation Platform</h3>
                  <p className="text-gray-400">
                    A client-focused platform connecting users to trusted service providers with ratings and reviews.
                    Built to generate leads and improve business visibility online.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Easy-to-use client/provider interface</li>
                        <li>• Responsive search & filters</li>
                        <li>• Clear UX for high conversion</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Backend</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Supabase authentication & database</li>
                        <li>• Ratings & reviews system</li>
                        <li>• Provider profile management</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Side - Links */}
                <div className="flex flex-col justify-center items-start gap-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Links</h4>
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
                  <h3 className="text-2xl font-bold mb-4 text-white">NovaSmarts – Business Website</h3>
                  <p className="text-gray-400">
                    A modern, responsive website for a construction & renovation company.
                    Focused on professional branding and online lead generation.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Modern responsive design</li>
                        <li>• TailwindCSS styling</li>
                        <li>• Smooth animations & UX</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Backend</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Static site hosted on Vercel</li>
                        <li>• SEO optimized</li>
                        <li>• Fast load times</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Side - Links */}
                <div className="flex flex-col justify-center items-start gap-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Links</h4>
                  <a
                    href="https://novasmarts.co.za/"
                    target="_blank"
                    className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition text-sm"
                  >
                    Live Site
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
