"use client";

import { useEffect, useState } from "react";

/**
 * Cache toute la page derrière un voile opaque pendant les premières
 * millisecondes du chargement, le temps que le script Google Translate
 * s'initialise. Comme ce voile est au-dessus de TOUT (z-index max) et
 * couvre tout l'écran, peu importe où Google injecte son icône/spinner
 * dans le DOM (même en dehors de notre conteneur) : elle reste invisible.
 */
export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "var(--background, #ffffff)",
        zIndex: 999999,
        pointerEvents: "none",
      }}
    />
  );
}