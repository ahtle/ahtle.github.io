"use client";

import { usePathname } from "next/navigation";
import { useHistoryVersion } from "@/hooks/use-history-version";

export default function PracticeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const historyVersion = useHistoryVersion();

  return (
    <div key={`${pathname}-${historyVersion}`}>{children}</div>
  );
}
