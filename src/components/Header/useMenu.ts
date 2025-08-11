// /app/components/navbar/useMenu.ts
"use client";

import { useState, useCallback, useEffect } from "react";

export function useMenu(initial = false) {
  const [open, setOpen] = useState<boolean>(initial);

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);
  const openMenu = useCallback(() => setOpen(true), []);

  // optional: close menu on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return { open, toggle, close, openMenu };
}
