'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);
	const [showContact, setShowContact] = useState(false);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-10 md:mb-14"
				>
					<div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
						<h1 className="text-4xl md:text-7xl font-bold leading-[1.3]">
							<span className="inline-block pb-3 align-bottom text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
								Knightly Digital
							</span>
						</h1>

						<h2 className="text-xl md:text-3xl font-semibold text-white">
							Websites & Platforms Built to Grow Your Business
						</h2>

						<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
							I design and build modern websites and web platforms that help businesses attract customers,
							generate leads, and scale online — without unnecessary complexity.
						</p>

						<p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
							Founded and led by <span className="text-white font-medium">Tutu Mbuyisa</span> ·
							Previously worked with clients on <span className="text-blue-400">Upwork</span>
						</p>
					</div>

					{/* CTA */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<button
							onClick={() => setShowContact(true)}
							className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
						>
							Get a Website
						</button>
						<a
							href="#work"
							className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition"
						>
							View Work
						</a>
					</div>
				</motion.div>

				{/* Services / Capabilities */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{/* Websites */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'frontend'
										? 'bg-blue-500/20 border-blue-500/50'
										: 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-4 text-blue-400">
									Business Websites
								</h3>
								<ul className="space-y-2 text-sm text-gray-400">
									<li>• Fast, responsive, mobile-first design</li>
									<li>• Clear messaging that converts visitors</li>
									<li>• Built with modern, maintainable tech</li>
								</ul>
							</div>

							{/* Platforms */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'backend'
										? 'bg-purple-500/20 border-purple-500/50'
										: 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-4 text-purple-400">
									Custom Web Platforms
								</h3>
								<ul className="space-y-2 text-sm text-gray-400">
									<li>• Marketplaces, dashboards & web apps</li>
									<li>• Secure authentication & databases</li>
									<li>• Built to scale as your business grows</li>
								</ul>
							</div>

							{/* Deployment */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'devops'
										? 'bg-teal-500/20 border-teal-500/50'
										: 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-4 text-teal-400">
									Launch & Support
								</h3>
								<ul className="space-y-2 text-sm text-gray-400">
									<li>• Hosting & deployment setup</li>
									<li>• Performance & reliability focus</li>
									<li>• Ongoing updates & improvements</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Contact Modal */}
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
