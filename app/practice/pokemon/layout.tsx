"use client";

import { usePathname } from "next/navigation";
import { useNavigationKey } from "@/hooks/use-navigation-key";

interface PokemonLayoutProps {
  children: React.ReactNode;
}

export default function PokemonLayout({ children }: PokemonLayoutProps) {
  const pathname = usePathname();
  const navigationKey = useNavigationKey();

  return <div key={`${pathname}-${navigationKey}`}>{children}</div>;
}
