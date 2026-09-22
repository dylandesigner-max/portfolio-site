"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className,
      )}
    >
      {mounted ? (
        isDark ? (
          <Sun size={16} weight="bold" aria-hidden="true" />
        ) : (
          <Moon size={16} weight="bold" aria-hidden="true" />
        )
      ) : (
        <span className="block h-4 w-4" />
      )}
    </button>
  );
}
