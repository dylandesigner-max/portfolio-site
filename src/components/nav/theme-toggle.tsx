"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { clsx } from "clsx";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle({ transparent = false }: { transparent?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className={clsx(
        "flex h-9 w-9 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        transparent
          ? "border-white/30 text-white hover:border-white"
          : "border-line text-ink hover:border-ink",
      )}
    >
      {mounted ? (
        isDark ? (
          <IconSun size={17} strokeWidth={1.75} aria-hidden="true" />
        ) : (
          <IconMoon size={17} strokeWidth={1.75} aria-hidden="true" />
        )
      ) : (
        <span className="block h-[17px] w-[17px]" />
      )}
    </button>
  );
}
