export default function ProjectsPage() {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-8 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase">
          Projects
        </h1>
        <p className="text-gray-300 mt-4 text-lg text-center max-w-3xl">
          Explore my latest work and creative projects that push the boundaries of design and technology.
        </p>
  
        {/* Placeholder for future projects */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-72 h-44 bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Project 1</p>
          </div>
          <div className="w-72 h-44 bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Project 2</p>
          </div>
          <div className="w-72 h-44 bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Project 3</p>
          </div>
        </div>
      </section>
    );
  }