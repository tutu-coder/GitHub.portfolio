'use client';

import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<Hero/>
			<ProjectsSection />
			<ContactForm />
			<ContactSection />
		</main>
	);
}
