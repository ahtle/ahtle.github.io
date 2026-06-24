import { getPokemonList, getPokemonDetail } from "@/apis/pokemon";
import { useQuery } from "@tanstack/react-query";

export const pokemonKeys = {
  all: ["pokemon"] as const,
  lists: () => [...pokemonKeys.all, "list"] as const,
  details: (name: string) => [...pokemonKeys.all, "detail", name] as const,
};

export function usePokemonList() {
  return useQuery({
    queryKey: pokemonKeys.lists(),
    queryFn: ({ signal }) => getPokemonList({ signal }),
  });
}

export function usePokemonDetail(name: string) {
  return useQuery({
    queryKey: pokemonKeys.details(name),
    queryFn: ({ signal }) => getPokemonDetail(name, signal),
  });
}
