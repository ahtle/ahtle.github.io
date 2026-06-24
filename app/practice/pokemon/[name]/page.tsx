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

export async function generateMetadata({ params }: PokemonDetailsPageProps) {
  const { name } = await params;
  return {
    title: `Pokemon - ${name}`,
    description: `Information about ${name}`,
    openGraph: {
      title: `${name} - Pokemon`,
      description: `Information about ${name}`,
    },
  };
}

interface PokemonDetailsPageProps {
  params: Promise<{ name: string }>;
}

export default async function PokemonDetailsPage({
  params,
}: PokemonDetailsPageProps) {
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
