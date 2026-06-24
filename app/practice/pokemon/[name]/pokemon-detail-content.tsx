import { PokemonDetail } from "@/apis/pokemon";
import SectionHeader from "@/components/section-header";
import Image from "next/image";

interface PokemonDetailContentProps {
  pokemon: PokemonDetail;
}

export default function PokemonDetailContent({
  pokemon,
}: PokemonDetailContentProps) {
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
      <div>
        {pokemon.moves.map((move) => (
          <div key={move.move.name}>
            <p>{move.move.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
