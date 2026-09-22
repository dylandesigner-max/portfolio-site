"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/dictionaries";

const options: { value: Locale; label: string }[] = [
  { value: "pt", label: "PT" },
  { value: "en", label: "EN" },
];

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Idioma do site"
      className={cn(
        "flex items-center rounded-full border border-line p-0.5 text-xs font-semibold",
        className,
      )}
    >
      {options.map((option) => {
        const active = option.value === locale;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(option.value)}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              active ? "bg-ink text-bg" : "text-ink-soft hover:text-ink",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
