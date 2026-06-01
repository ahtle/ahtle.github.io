import {
  PROJECTS,
  type Project,
} from "@/app/_components/projects/project-constants";

export const getProjects = (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PROJECTS);
    }, 100);
  });
};
