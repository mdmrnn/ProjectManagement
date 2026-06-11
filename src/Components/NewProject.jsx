import { useState } from "react";
import Input from "./Input";

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
        <menu className="flex justify-end gap-4">
          <button
            className=" text-stone-800 hover:text-stone-950 rounded-lg py-2 px-4 cursor-pointer"
            onClick={() => setView("NoProjects")}
          >
            Cancel
          </button>
          <button
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-lg py-2 px-4 cursor-pointer"
            onClick={addNewProject}
          >
            Save
          </button>
        </menu>
        <div className="flex flex-col gap-2">
          <Input
            label="title"
            newProject={newProject}
            setNewProject={setNewProject}
          />
          <Input
            label="description"
            newProject={newProject}
            setNewProject={setNewProject}
            textarea
          />
          <Input
            label="duedate"
            newProject={newProject}
            setNewProject={setNewProject}
          />
        </div>
      </div>
    </section>
  );
}
