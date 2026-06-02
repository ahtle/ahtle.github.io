import { useCallback, useEffect, useReducer } from "react";
import { getProjects } from "@/apis/api";
import { type Project } from "@/app/_components/projects/project-constants";

type State = {
  projects: Project[];
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "loading" }
  | { type: "success"; payload: Project[] }
  | { type: "error"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true, error: null };

    case "success":
      return { projects: action.payload, loading: false, error: null };

    case "error":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const useGetProject = () => {
  const [state, dispatch] = useReducer(reducer, {
    projects: [],
    loading: true,
    error: null,
  });

  const fetchProjects = useCallback(async () => {
    dispatch({ type: "loading" });
    try {
      const data = await getProjects();
      dispatch({ type: "success", payload: data });
    } catch (e) {
      dispatch({
        type: "error",
        payload: e instanceof Error ? e.message : "Unknown error",
      });
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    ...state,
    refetch: fetchProjects,
  };
};
