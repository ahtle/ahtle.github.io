import { useCallback, useEffect, useReducer } from "react";
import {
  PokemonListResponse,
  getPokemonList,
} from "@/app/practice/pokemon/pokemon";

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
  const [state, dispatch] = useReducer(reducer, {
    pokemons: null,
    loading: true,
    error: null,
  });

  const fetchPokemon = useCallback(async () => {
    dispatch({ type: "loading" });
    try {
      const data = await getPokemonList();
      console.log(data);
      dispatch({ type: "success", payload: data });
    } catch (e) {
      dispatch({
        type: "error",
        payload: e instanceof Error ? e.message : "Unknown error",
      });
    }
  }, []);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  return {
    ...state,
    refetch: fetchPokemon,
  };
};
