import {
  getPokemonDetail,
  getPokemonList,
  PokemonNotFoundError,
} from "@/apis/pokemon";
import { notFound } from "next/navigation";
import PokemonDetailContent from "./pokemon-detail-content";

export async function generateStaticParams() {
  const { results } = await getPokemonList({ limit: 2000 });
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
  return <PokemonDetailContent pokemon={pokemon} />;
}
