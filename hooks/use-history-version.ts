"use client";

import { useSyncExternalStore } from "react";

let historyVersion = 0;
const subscribers = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  subscribers.add(onStoreChange);
  return () => {
    subscribers.delete(onStoreChange);
  };
}

function getSnapshot() {
  return historyVersion;
}

function bumpHistoryVersion() {
  historyVersion += 1;
  subscribers.forEach((notify) => notify());
}

if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    // Defer until after the Next.js router applies the history entry.
    requestAnimationFrame(bumpHistoryVersion);
  });
}

/** Increments on browser back/forward; persists while pages unmount. */
export function useHistoryVersion() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
