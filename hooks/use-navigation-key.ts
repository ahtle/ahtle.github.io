"use client";

import { usePathname } from "next/navigation";
import { useEffect, useSyncExternalStore } from "react";

let globalNavigationKey = 0;
let pathnameAtLastBump = "";
const subscribers = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  subscribers.add(onStoreChange);
  return () => {
    subscribers.delete(onStoreChange);
  };
}

function getSnapshot() {
  return globalNavigationKey;
}

function bumpNavigationKey() {
  globalNavigationKey += 1;
  subscribers.forEach((notify) => notify());
}

function syncNavigationKeyToPathname(pathname: string) {
  if (pathnameAtLastBump !== pathname) {
    pathnameAtLastBump = pathname;
    bumpNavigationKey();
  }
}

export function NavigationKeyTracker() {
  const pathname = usePathname();

  syncNavigationKeyToPathname(pathname);

  useEffect(() => {
    const onPopState = () => bumpNavigationKey();
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return null;
}

export function useNavigationKey() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
