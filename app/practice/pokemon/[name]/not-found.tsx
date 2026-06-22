"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import SectionHeader from "@/components/section-header";

export default function PokemonNotFound() {
  const params = useParams();
  const name =
    typeof params.name === "string" && params.name.trim()
      ? params.name
      : "this Pokémon";

  return (
    <div id="pokemon-detail">
      <SectionHeader sectionId="pokemon-detail" text={name} />
      <p>Can&apos;t find {name}</p>
      <Link href="/practice/pokemon">Back to list</Link>
    </div>
  );
}
