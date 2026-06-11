import { useState } from "react";
import Overview from "./Components/Overview";
import NoProjects from "./Components/NoProjects";
import NewProject from "./Components/NewProject";
import NewTask from "./Components/NewTask";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [
      {
        id: 0,
        title: "Learn React",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        duedate: "2026-06-10",
        tasks: ["Watch videos", "Practice"],
      },
    ],
  });

  let content;
  if (projectsState.selectedProjectId === undefined)
    content = <NoProjects setProjectsState={setProjectsState} />;
  else if (projectsState.selectedProjectId === null)
    content = <NewProject setProjectsState={setProjectsState} />;
  else
    content = (
      <NewTask
        id={projectsState.selectedProjectId}
        setProjectsState={setProjectsState}
        projects={projectsState.projects}
      />
    );

  return (
    <main>
      <Overview
        projectsState={projectsState}
        setProjectsState={setProjectsState}
      />
      {content}
    </main>
  );
}

export default App;
