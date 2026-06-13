import { useContext, useState } from "react";
import { ProjectContext } from "../store/ProjectContext";

export default function NewTask() {
  const { id, setProjects, projects } = useContext(ProjectContext);

  const [task, setTask] = useState("");
  const projectIndex = projects.findIndex((project) => project.id === id);

  function deleteProject() {
    setProjects((prev) => {
      const updatedprojects = [
        ...prev.projects.map((obj) => ({
          ...obj,
          tasks: [...obj.tasks],
        })),
      ];

      updatedprojects.splice(projectIndex, 1);
      console.log(updatedprojects);

      return { selectedProjectId: undefined, projects: updatedprojects };
    });
  }

  function addTask() {
    if (task.trim() === "") return;
    else {
      setProjects((prev) => {
        const updatedprojects = [
          ...prev.projects.map((obj) => ({
            ...obj,
            tasks: [...obj.tasks],
          })),
        ];
        updatedprojects[projectIndex].tasks.push(task);

        return { ...prev, projects: updatedprojects };
      });
      setTask("");
    }
  }

  function deleteTask(ind) {
    setProjects((prev) => {
      const updatedprojects = [
        ...prev.projects.map((obj) => ({
          ...obj,
          tasks: [...obj.tasks],
        })),
      ];
      updatedprojects[projectIndex].tasks.splice(ind, 1);
      console.log(updatedprojects);

      return { ...prev, projects: updatedprojects };
    });
  }

  return (
    <section className="ms-58 me-8 sm:ms-68 my-12 max-w-3xl">
      <div className="flex flex-col gap-4 pt-15 text-stone-700">
        <div className="flex flex-col items-start border-b-2 border-stone-300">
          <div className="flex justify-between w-full items-center">
            <h2 className="font-bold text-xl text-stone-900">
              {projects[projectIndex].title}
            </h2>
            <button
              className="cursor-pointer hover:text-red-500 transition-color duration-300"
              onClick={deleteProject}
            >
              DELETE
            </button>
          </div>
          <div className="text-stone-400 mt-2">
            {new Date(projects[projectIndex].duedate).toLocaleDateString(
              "en-Us",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              },
            )}
          </div>
          <div className="my-4 whitespace-pre-wrap">
            {projects[projectIndex].description}
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-bold text-stone-900 my-4">Tasks</h2>
          <div className="flex gap-4">
            <input
              type="text"
              className="border px-1"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="cursor-pointer" onClick={addTask}>
              Add Task
            </button>
          </div>
          {projects[projectIndex].tasks.length === 0 && (
            <h3>There is no task for this project</h3>
          )}
          {projects[projectIndex].tasks.length !== 0 && (
            <ul className="py-4 bg-stone-100 w-full px-4 rounded-xl">
              {projects[projectIndex].tasks.map((task, index) => (
                <li
                  key={index}
                  className="py-1 animate-slide-in flex justify-between items-center"
                >
                  <span>{task}</span>
                  <button
                    className="hover:text-red-500 cursor-pointer transition-color duration-300"
                    onClick={() => deleteTask(index)}
                  >
                    Clear
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
