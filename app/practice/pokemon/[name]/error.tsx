"use client";

import Link from "next/link";

interface PokemonDetailErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function PokemonDetailError({
  error,
  reset,
}: PokemonDetailErrorProps) {
  return (
    <div id="pokemon-detail">
      <p>Something went wrong loading this Pokémon.</p>
      <p>{error.message}</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
      <Link href="/practice/pokemon">Back to list</Link>
    </div>
  );
}
