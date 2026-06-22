import { PokemonListResponse, getPokemonList } from "@/apis/pokemon";
import { useNavigationKey } from "@/hooks/use-navigation-key";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useReducer } from "react";

type State = {
  pokemons: PokemonListResponse | null;
  loading: boolean;
  error: string | null;
};

type Action =
  | { type: "loading" }
  | { type: "success"; payload: PokemonListResponse }
  | { type: "error"; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true, error: null };
    case "success":
      return { pokemons: action.payload, loading: false, error: null };
    case "error":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useGetPokemon = () => {
  const pathname = usePathname();
  const navigationKey = useNavigationKey();
  const [state, dispatch] = useReducer(reducer, {
    pokemons: null,
    loading: true,
    error: null,
  });

  const fetchPokemon = useCallback(async (signal?: AbortSignal) => {
    dispatch({ type: "loading" });
    try {
      const data = await getPokemonList(signal);
      dispatch({ type: "success", payload: data });
    } catch (e) {
      if (signal?.aborted || axios.isCancel(e)) return;
      dispatch({
        type: "error",
        payload: e instanceof Error ? e.message : "Unknown error",
      });
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchPokemon(controller.signal);
    return () => controller.abort();
  }, [fetchPokemon, navigationKey, pathname]);

  return {
    ...state,
    refetch: () => fetchPokemon(),
  };
};
