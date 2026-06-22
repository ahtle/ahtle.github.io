import axios from "axios";

const POKEAPI_BASE = "https://pokeapi.co/api/v2";

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export const getPokemonList = async (
  signal?: AbortSignal,
): Promise<PokemonListResponse> => {
  try {
    const res = await axios.get(`${POKEAPI_BASE}/pokemon/`, { signal });
    return res.data as Promise<PokemonListResponse>;
  } catch (e) {
    throw new Error(`Failed to fetch Pokemon list (${e})`);
  }
};
