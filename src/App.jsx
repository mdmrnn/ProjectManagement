import { useState } from "react";
import Overview from "./Components/Overview";
import NoProjects from "./Components/NoProjects";
import NewProject from "./Components/NewProject";
import NewTask from "./Components/NewTask";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "Learn React",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      duedate: "2026-06-10",
      tasks: ["Watch videos", "Practice"],
    },
  ]);

  const [view, setView] = useState("NoProjects");
  const [activeId, setActiveId] = useState(0);

  function goForTask(id) {
    setActiveId(id);
    setView("NewTask");
  }

  return (
    <>
      <Overview setView={setView} projects={projects} goForTask={goForTask} />
      {view === "NoProjects" && (
        <NoProjects key="NoProjects" setView={setView} />
      )}
      {view === "NewProject" && (
        <NewProject
          key="NewProject"
          setProjects={setProjects}
          setView={setView}
        />
      )}
      {view === "NewTask" && (
        <NewTask
          key="NewTask"
          id={activeId}
          setProjects={setProjects}
          setView={setView}
          projects={projects}
        />
      )}
    </>
  );
}

export default App;
