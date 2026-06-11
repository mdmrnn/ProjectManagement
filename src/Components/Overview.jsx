export default function Overview({ projects, setView, goForTask }) {
  return (
    <section className="bg-stone-900 w-50 sm:w-60 fixed top-12 rounded-tr-2xl h-screen">
      <div className="flex flex-col items-start gap-9 mt-15 mx-4 sm:mx-8 ">
        <h1 className="text-stone-50 font-bold text-lg sm:text-xl">
          YOUR PROJECTS
        </h1>
        <button
          className="bg-stone-600 text-stone-400 rounded-lg px-4 py-2 text-sm sm:text-base cursor-pointer"
          onClick={() => setView("NewProject")}
        >
          + Add Project
        </button>
        <ul className="w-full">
          {projects.map((project, index) => {
            return (
              <li
                key={index}
                className="bg-stone-800 text-stone-300 my-2 px-2 sm:px-4 py-1 cursor-pointer"
                onClick={() => goForTask(project.id)}
              >
                {project.title}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
