import {
  getPokemonDetail,
  getPokemonList,
  PokemonNotFoundError,
} from "@/apis/pokemon";
import SectionHeader from "@/components/section-header";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { results } = await getPokemonList();
  return results.map((pokemon) => ({ name: pokemon.name }));
}

export default async function PokemonDetailsPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  let pokemon;
  try {
    pokemon = await getPokemonDetail(name);
  } catch (e) {
    if (e instanceof PokemonNotFoundError) {
      notFound();
    }
    throw e;
  }

  const sprite = pokemon.sprites.front_default;

  return (
    <div id="pokemon-detail">
      <SectionHeader sectionId="pokemon-detail" text={pokemon.name} />
      <div className="flex justify-center">
        {sprite ? (
          <Image src={sprite} alt={pokemon.name} width={100} height={100} />
        ) : (
          <p>No image available for {pokemon.name}</p>
        )}
      </div>
    </div>
  );
}
