import SectionHeader from "@/components/section-header";

export default async function PokemonDetailsPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  return (
    <div id="pokemon-detail">
      {name && (
        <SectionHeader sectionId="pokemon-detail" text={name} key={name} />
      )}
    </div>
  );
}
