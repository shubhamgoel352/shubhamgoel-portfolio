export default function Projects() {
    return (
      <section id="projects" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="mt-4 max-w-xl text-gray-300">
          A collection of my work in AI, design, and technology. I focus on building innovative solutions that drive impact.
        </p>
  
        {/* Placeholder for project cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-400 mt-2">A short description of the project.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-400 mt-2">Another cool project I worked on.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="text-gray-400 mt-2">An AI-powered innovation.</p>
          </div>
        </div>
      </section>
    );
  }