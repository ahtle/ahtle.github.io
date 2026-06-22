import { getPokemonList } from "@/apis/pokemon";
import SectionHeader from "@/components/section-header";

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

  return (
    <div id="pokemon-detail">
      {name && (
        <SectionHeader
          sectionId="pokemon-detail"
          text={name}
          decodeOnMount
        />
      )}
    </div>
  );
}
