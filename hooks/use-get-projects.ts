import { useEffect, useState } from "react";
import { getProjects } from "@/apis/api";
import { type Project } from "@/app/_components/projects/project-constants";

export const useGetProject = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        setProjects(await getProjects());
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [version]);

  return { projects, loading, error, refetch: () => setVersion((v) => v + 1) };
};
