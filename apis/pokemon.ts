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

export interface PokemonDetail {
  name: string;
  sprites: {
    front_default: string | null;
  };
  moves: {
    move: {
      name: string;
    };
  }[];
}

export class PokemonNotFoundError extends Error {
  readonly pokemonName: string;

  constructor(pokemonName: string) {
    super(`Pokemon not found: ${pokemonName}`);
    this.name = "PokemonNotFoundError";
    this.pokemonName = pokemonName;
  }
}

export class PokemonFetchError extends Error {
  constructor(
    message: string,
    readonly cause?: unknown,
  ) {
    super(message);
    this.name = "PokemonFetchError";
  }
}

export async function getPokemonList({
  signal,
  limit,
}: {
  signal?: AbortSignal;
  limit?: number;
} = {}): Promise<PokemonListResponse> {
  try {
    let url = `${POKEAPI_BASE}/pokemon/`;
    if (typeof limit === "number" && Number.isFinite(limit)) {
      url += `?limit=${limit}`;
    }
    const res = await axios.get(url, { signal });
    return res.data as PokemonListResponse;
  } catch (e) {
    throw new PokemonFetchError(`Failed to fetch Pokemon list`, e);
  }
}

export const getPokemonDetail = async (
  name: string,
  signal?: AbortSignal,
): Promise<PokemonDetail> => {
  const trimmedName = name.trim();
  if (!trimmedName) {
    throw new PokemonNotFoundError(name);
  }

  try {
    const res = await axios.get(
      `${POKEAPI_BASE}/pokemon/${encodeURIComponent(trimmedName)}`,
      {
        signal,
      },
    );
    return res.data as PokemonDetail;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      throw new PokemonNotFoundError(trimmedName);
    }
    throw new PokemonFetchError(
      `Failed to fetch Pokemon detail (${trimmedName})`,
      e,
    );
  }
};
