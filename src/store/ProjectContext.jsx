import { createContext } from "react";

export const ProjectContext = createContext({
  id: undefined,
  projects: [
    {
      id: 0,
      title: "",
      description: "",
      duedate: "",
      tasks: [],
    },
  ],
  setProjects: () => {},
});
