"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useLenis } from "@/lib/smooth-scroll";
import { useLocale } from "@/lib/i18n/context";
import type { MediaItem } from "@/lib/projects-data";

// Same lightbox pattern as ImageGallery (portal to <body>, keyboard/swipe
// navigation) but the content is centered instead of a scrollable column,
// since video/gif items don't need the tall-image scroll dynamic.
export function VideoGallery({
  items,
  sectionLabel,
}: {
  items: MediaItem[];
  sectionLabel: string;
}) {
  const { locale, t } = useLocale();
  const lenis = useLenis();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const total = items.length;

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % total));
  }, [total]);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current - 1 + total) % total));
  }, [total]);

  useEffect(() => {
    if (activeIndex === null) return;

    document.body.style.overflow = "hidden";
    lenis?.stop();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      lenis?.start();
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, lenis, showNext, showPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;

    if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0) showNext();
      else showPrev();
    }
  };

  if (items.length === 0) return null;

  const altFor = (item: MediaItem, i: number) => {
    const custom = item.alt ? (locale === "pt" ? item.alt.pt : item.alt.en) : "";
    return custom || `${sectionLabel} ${i + 1}`;
  };

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setActiveIndex(i)}
            data-cursor-hover
            className="group relative aspect-video overflow-hidden rounded-card border border-line bg-bg-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                muted
                loop
                autoPlay
                playsInline
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={altFor(item, i)}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            )}
          </button>
        ))}
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[95] flex items-center justify-center bg-ink/80 p-3 backdrop-blur-md md:p-10"
                onClick={() => setActiveIndex(null)}
              >
                <motion.div
                  initial={{ scale: 0.97, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.98, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative max-h-full max-w-full"
                  onClick={(e) => e.stopPropagation()}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {active.type === "video" ? (
                    <video
                      key={activeIndex}
                      src={active.src}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="max-h-[86vh] max-w-full rounded-lg"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={activeIndex}
                      src={active.src}
                      alt={activeIndex !== null ? altFor(active, activeIndex) : ""}
                      className="max-h-[86vh] max-w-full rounded-lg object-contain"
                    />
                  )}
                </motion.div>

                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label={t.projectPage.close}
                  data-cursor-hover
                  className="fixed right-5 top-5 z-[96] flex h-11 w-11 items-center justify-center rounded-full bg-bg text-ink shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <X size={20} weight="bold" aria-hidden="true" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
