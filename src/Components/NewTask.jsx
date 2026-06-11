import { useState } from "react";

export default function NewTask({ id, setProjects, setView, projects }) {
  const [task, setTask] = useState("");
  const projectIndex = projects.findIndex((project) => project.id === id);

  function deleteProject() {
    setProjects((prev) => {
      const updatedprojects = [
        ...prev.map((obj) => ({
          ...obj,
          tasks: [...obj.tasks],
        })),
      ];

      updatedprojects.splice(projectIndex, 1);
      console.log(updatedprojects);

      return updatedprojects;
    });
    setView("NoProjects");
  }

  function addTask() {
    if (task === "") alert("Task can not be empty");
    else {
      setProjects((prev) => {
        const updatedprojects = [
          ...prev.map((obj) => ({
            ...obj,
            tasks: [...obj.tasks],
          })),
        ];
        updatedprojects[projectIndex].tasks.push(task);

        return updatedprojects;
      });
      setTask("");
    }
  }

  function deleteTask(ind) {
    setProjects((prev) => {
      const updatedprojects = [
        ...prev.map((obj) => ({
          ...obj,
          tasks: [...obj.tasks],
        })),
      ];
      updatedprojects[projectIndex].tasks.splice(ind, 1);
      console.log(updatedprojects);

      return updatedprojects;
    });
  }

  return (
    <section className="ms-58 me-8 sm:ms-68 my-12 max-w-3xl">
      <div className="flex flex-col gap-4 pt-15 text-stone-700">
        <div className="flex flex-col items-start border-b-2 border-stone-400">
          <div className="flex justify-between w-full items-center">
            <h2 className="font-bold text-xl text-stone-900">
              {projects[projectIndex].title}
            </h2>
            <button className="cursor-pointer" onClick={deleteProject}>
              DELETE
            </button>
          </div>
          <div className="text-stone-400 mt-2">
            {projects[projectIndex].duedate}
          </div>
          <div className="my-4">{projects[projectIndex].description}</div>
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
            <p>There is no task for this project</p>
          )}
          {projects[projectIndex].tasks.length !== 0 && (
            <ul className="py-4 bg-stone-200 w-full px-4">
              {projects[projectIndex].tasks.map((task, index) => (
                <li
                  key={index}
                  className="py-1 cursor-pointer animate-slide-in"
                  onClick={() => deleteTask(index)}
                >
                  {task}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
