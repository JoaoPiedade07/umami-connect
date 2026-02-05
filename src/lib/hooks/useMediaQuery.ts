"use client";

import { useEffect, useState } from "react";

/**
 * Retorna true/false conforme o media query (ex.: "(max-width: 768px)").
 * Útil para menu mobile, layout responsivo e condicionais de UI.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
