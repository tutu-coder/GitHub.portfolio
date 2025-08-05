export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12 max-w-4xl mx-auto space-y-20">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-2">Tutu Mbuyisa</h1>
        <p className="text-xl text-gray-400">Full-Stack Web Developer</p>
        <a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          See My Work
        </a>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">
          Hi there! My name is Tutu Mbuyisa (duh) and I&apos;m a passionate full-stack web developer (or at least I think so😂). 
          I enjoy building web apps that are useful, fast, and user-friendly. I have built two big projects: a Services Marketplace and a TikTok-style video sharing platform called Knightly. 
          I have also worked on smaller websites with a team of 3 people, my favourite being Novasmarts.co.za 
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-2xl font-bold mb-2">Services Marketplace</h3>
            <p className="text-gray-300 mb-3">
              A Bark-style platform where users find local service providers, complete with ratings and reviews.
            </p>
            <p className="text-sm italic text-gray-400 mb-4">Next.js, React, Supabase, TailwindCSS</p>
            <div className="flex gap-4">
              <a href="https://near-me-weld.vercel.app/" className="text-blue-400 hover:underline" target="_blank">
                Live Demo
              </a>
              <a href="https://github.com/tutu-coder/NearMe" className="text-blue-400 hover:underline" target="_blank">
                GitHub Repo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-2xl font-bold mb-2">Knightly</h3>
            <p className="text-gray-300 mb-3">
              A vertical-scrolling video platform (like TikTok) with public creator profiles.
            </p>
            <p className="text-sm italic text-gray-400 mb-4">React, Next.js, Supabase, TailwindCSS</p>
            <div className="flex gap-4">
              <a href="https://knightly-gfgf.vercel.app/" className="text-blue-400 hover:underline" target="_blank">
                Live Demo
              </a>
              <a href="https://github.com/tutu-coder/Knightly" className="text-blue-400 hover:underline" target="_blank">
                GitHub Repo
              </a>
            </div>
          </div>


          {/* Project 3 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-2xl font-bold mb-2">NovaSmarts</h3>
            <p className="text-gray-300 mb-3">
              A Basic website focused on front-end design for a construction and renovation company.
            </p>
            <p className="text-sm italic text-gray-400 mb-4">Next.js, React, TailwindCSS</p>
            <div className="flex gap-4">
              <a href="https://novasmarts.co.za/" className="text-blue-400 hover:underline" target="_blank">
                Live Demo
              </a>
             
            </div>
          </div>
        </div>

         

      </section>

      {/* Skills Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-300">
          {["JavaScript", "React", "Next.js", "TailwindCSS", "Supabase", "PostgreSQL", "Node.js"].map((skill) => (
            <span key={skill} className="bg-gray-700 rounded-full px-4 py-2 text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-gray-300">
          You can reach me at{" "}
          <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">
            tutumbuyisa9@gmail.ocm
          </a>
        </p>
      </section>
    </main>
  )
}
