import { createContext } from "react";

export const ProjectContext = createContext({
  // selectedProjectId: undefined,
  // projects: [
  //   {
  //     id: 0,
  //     title: "Learn React",
  //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     duedate: "2026-06-10",
  //     tasks: ["Watch videos", "Practice"],
  //   },
  // ],
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
  setProjectsState: () => {},
});
