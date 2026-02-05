"use client";

import { useEffect, useState } from "react";

/**
 * Retorna o valor após um delay (debounce).
 * Útil para pesquisa na NavBar, filtros em tempo real, etc.
 */
export function useDebounce<T>(value: T, delayMs: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    return () => window.clearTimeout(timer);
  }, [value, delayMs]);

  return debouncedValue;
}
