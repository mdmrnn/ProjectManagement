import Notebook from "../assets/no-projects.png";

export default function NoProjects({ setView }) {
  return (
    <section className="ms-58 me-8 sm:ms-68 my-12 max-w-3xl">
      <div className="flex flex-col items-center gap-4 pt-15">
        <img src={Notebook} alt="a note book with a pen" className="w-20"></img>
        <h2 className="sm:text-lg text-stone-500 font-bold">
          No Project Selected
        </h2>
        <p className="text-stone-400">
          Select a project or get start with a new one
        </p>
        <button
          className="bg-stone-800 text-stone-400 rounded-lg mt-5 px-4 py-2 cursor-pointer"
          onClick={() => setView("NewProject")}
        >
          Create new project
        </button>
      </div>
    </section>
  );
}
