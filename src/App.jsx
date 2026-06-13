import { useState } from "react";
import Overview from "./Components/Overview";
import NoProjects from "./Components/NoProjects";
import NewProject from "./Components/NewProject";
import NewTask from "./Components/NewTask";
import { ProjectContext } from "./store";

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
    <ProjectContext.Provider
      value={{
        id: projectsState.selectedProjectId,
        projects: projectsState.projects,
        setProjectsState: setProjectsState,
      }}
    >
      <Overview />
      {content}
    </ProjectContext.Provider>
  );
}

export default App;
