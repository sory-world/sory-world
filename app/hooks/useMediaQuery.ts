import { useState, useEffect } from "react";

export function useMediaQuery(query: string, { ssr = false } = {}) {
  const [matches, setMatches] = useState<boolean>(ssr);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    onChange();

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }

    type LegacyMediaQueryList = {
      addListener?: (listener: (event: MediaQueryListEvent) => void) => void;
      removeListener?: (listener: (event: MediaQueryListEvent) => void) => void;
    };

    const legacy = mql as unknown as LegacyMediaQueryList;

    const legacyAdd = legacy.addListener?.bind(mql);
    const legacyRemove = legacy.removeListener?.bind(mql);

    if (legacyAdd && legacyRemove) {
      legacyAdd(onChange);
      return () => legacyRemove(onChange);
    }

    return undefined;
  }, [query]);

  return matches;
}
