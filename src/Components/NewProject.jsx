import { useState } from "react";

export default function NewProject({ setView, setProjects }) {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    duedate: "",
    tasks: [],
  });

  // const title = useRef();
  // const description = useRef();
  // const duedate = useRef();

  function addNewProject() {
    if (newProject.title === "") alert("title is erquired");
    else if (newProject.duedate === "") alert("date is required");
    else {
      setProjects((prev) => [
        ...prev,
        {
          id: prev.length,
          // title: title.current.value,
          // description: description.current.value,
          // duedate: duedate.current.value,
          title: newProject.title,
          description: newProject.description,
          duedate: newProject.duedate,
          tasks: [],
        },
      ]);
      setNewProject();
      setView("NoProjects");
    }
  }
  return (
    <section className="ms-58 me-8 sm:ms-68 my-12 max-w-3xl">
      <div className="flex flex-col gap-4 pt-15">
        <div className="flex justify-end gap-4">
          <button
            className=" text-stone-900 rounded-lg py-2 px-4 cursor-pointer"
            onClick={() => setView("NoProjects")}
          >
            Cancel
          </button>
          <button
            className="bg-stone-900 text-stone-50 rounded-lg py-2 px-4 cursor-pointer"
            onClick={addNewProject}
          >
            Save
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <label>TITLE</label>
            <input
              // ref={title}
              value={newProject.title}
              onChange={(event) =>
                setNewProject((prev) => ({
                  ...prev,
                  title: event.target.value,
                }))
              }
              required
              type="text"
              name="title"
              id="title"
              className="w-full bg-stone-300 p-1 outline-none border-b-2 border-stone-50 focus:border-stone-700 transition-border duration-300"
            />
          </div>
          <div>
            <label>DESCRIPTION</label>
            <textarea
              // ref={description}
              value={newProject.description}
              onChange={(event) =>
                setNewProject((prev) => ({
                  ...prev,
                  description: event.target.value,
                }))
              }
              type="text"
              name="title"
              id="title"
              className="w-full bg-stone-300 p-1 outline-none border-b-2 border-stone-50 focus:border-stone-700  transition-border duration-300"
            />
          </div>
          <div>
            <label>DUE DATE</label>
            <input
              required
              // ref={duedate}
              value={newProject.duedate}
              onChange={(event) =>
                setNewProject((prev) => ({
                  ...prev,
                  duedate: event.target.value,
                }))
              }
              type="date"
              name="title"
              id="title"
              className="w-full bg-stone-300 p-1 outline-none border-b-2 border-stone-50 focus:border-stone-700  transition-border duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
