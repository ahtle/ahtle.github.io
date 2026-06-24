"use client";

import SectionHeader from "@/components/section-header";
import { usePokemonList } from "@/hooks/use-pokemon-tanstack";
import PokemonListCard from "./pokemon-list-card";

export default function PokemonPage() {
  const { data: pokemons, isPending, isError, error } = usePokemonList();

  return (
    <div id="pokemon">
      <SectionHeader sectionId="pokemon" text="Pokemon" />
      <div>
        {isError && <p>{error.message}</p>}
        {isPending && <p>loading</p>}
        {pokemons?.results.map((p) => (
          <PokemonListCard key={p.name} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
