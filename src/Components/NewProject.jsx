import { useContext, useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";
import { ProjectContext } from "../store/ProjectContext";

export default function NewProject() {
  const { setProjects } = useContext(ProjectContext);

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    duedate: "",
    tasks: [],
  });
  const dialog = useRef();

  // const title = useRef();
  // const description = useRef();
  // const duedate = useRef();

  function addNewProject() {
    if (
      newProject.title.trim() === "" ||
      newProject.duedate.trim() === "" ||
      newProject.description.trim() === ""
    ) {
      console.log(
        newProject.title.trim(),
        newProject.duedate.trim(),
        newProject.description.trim(),
      );
      dialog.current.showModal();
    } else {
      setProjects((prev) => ({
        selectedProjectId: undefined,
        projects: [
          ...prev.projects,
          {
            id: prev.projects.length,
            // title: title.current.value,
            // description: description.current.value,
            // duedate: duedate.current.value,
            title: newProject.title,
            description: newProject.description,
            duedate: newProject.duedate,
            tasks: [],
          },
        ],
      }));
      setNewProject();
    }
  }

  return (
    <section className="ms-58 me-8 sm:ms-68 my-12 max-w-3xl">
      <Modal dialog={dialog} btnCaption="Okay">
        <h2 className="sm:text-lg text-stone-700 font-bold">Invalid Inputs</h2>
        <p className="text-stone-600 my-1">
          looks like you forgot to enter a value!
        </p>
        <p className="text-stone-600 my-1">
          make sure you provide a valid value for every input field!
        </p>
      </Modal>
      <div className="flex flex-col gap-4 pt-15">
        <menu className="flex justify-end gap-4">
          <button
            className=" text-stone-800 hover:text-stone-950 rounded-lg py-2 px-4 cursor-pointer"
            onClick={() => {
              return setProjects((prev) => {
                return {
                  ...prev,
                  selectedProjectId: undefined,
                };
              });
            }}
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
