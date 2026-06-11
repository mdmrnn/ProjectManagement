import Button from "./Button";

export default function Overview({ projects, setView, goForTask }) {
  return (
    <aside className="bg-stone-900 w-1/3 md:w-64 fixed top-12 rounded-r-xl h-screen px-8 py-16 tex-stone-50">
      <div className="flex flex-col items-start gap-9">
        <h2 className="text-stone-200 font-bold text-lg sm:text-xl">
          YOUR PROJECTS
        </h2>
        <Button onClick={() => setView("NewProject")}>+ Add Project</Button>
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
    </aside>
  );
}
