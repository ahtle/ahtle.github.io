import { PokemonListItem } from "@/apis/pokemon";
import Link from "next/link";

interface PokemonListCardProps {
  pokemon: PokemonListItem;
}

export default function PokemonListCard({ pokemon }: PokemonListCardProps) {
  return (
    <div>
      <Link href={`/practice/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
    </div>
  );
}
