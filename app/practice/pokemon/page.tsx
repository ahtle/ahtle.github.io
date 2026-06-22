"use client";

import SectionHeader from "@/components/section-header";
import { useGetPokemon } from "@/hooks/use-get-pokemon";
import PokemonListCard from "./PokemonListCard";

export default function PokemonPage() {
  const { pokemons, loading, error } = useGetPokemon();

  return (
    <div id="pokemon">
      <SectionHeader sectionId="pokemon" text="Pokemon" />
      <div>
        {error && <p>error</p>}
        {loading && <p>loading</p>}
        {pokemons?.results.map((p) => (
          <PokemonListCard key={p.name} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
