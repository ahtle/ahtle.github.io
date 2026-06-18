"use client";

import SectionHeader from "@/components/section-header";
import { useGetPokemon } from "@/hooks/use-get-pokemon";

export default function PokemonPage() {
  const { pokemons, loading, error, refetch } = useGetPokemon();

  return (
    <div id="pokemon">
      <SectionHeader sectionId="pokemon" text="Pokemon" />
      <div>
        {error && <p>error</p>}
        {loading && <p>loading</p>}
        {pokemons?.results.length && pokemons.count}
      </div>
    </div>
  );
}
