"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useLenis } from "@/lib/smooth-scroll";
import { useLocale } from "@/lib/i18n/context";
import type { GalleryImage } from "@/lib/projects-data";

// A local modal mounted/unmounted purely by this component's own state, so
// AnimatePresence here is safe: it never wraps Next's router-controlled
// children (that combination is what crashed navigation elsewhere; see
// page-transition.tsx and route-transition.tsx).
export function ImageGallery({
  images,
  sectionLabel,
}: {
  images: GalleryImage[];
  sectionLabel: string;
}) {
  const { locale, t } = useLocale();
  const lenis = useLenis();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const total = images.length;

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

  useEffect(() => {
    scrollBoxRef.current?.scrollTo({ top: 0 });
  }, [activeIndex]);

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

  if (images.length === 0) return null;

  const altFor = (image: GalleryImage, i: number) => {
    const custom = image.alt ? (locale === "pt" ? image.alt.pt : image.alt.en) : "";
    return custom || `${sectionLabel} ${i + 1}`;
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image, i) => (
          <button
            key={`${image.src}-${i}`}
            type="button"
            onClick={() => setActiveIndex(i)}
            data-cursor-hover
            className="group relative aspect-[4/3] overflow-hidden rounded-card border border-line bg-bg-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Image
              src={image.src}
              alt={altFor(image, i)}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {activeIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[95] bg-[color-mix(in_srgb,var(--ink)_80%,transparent)] p-3 backdrop-blur-md md:p-10"
                onClick={() => setActiveIndex(null)}
              >
                <motion.div
                  initial={{ scale: 0.97, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.98, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative mx-auto h-full max-w-[1600px] overflow-y-auto rounded-lg"
                  data-lenis-prevent
                  ref={scrollBoxRef}
                  onClick={(e) => e.stopPropagation()}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    key={activeIndex}
                    src={images[activeIndex].src}
                    alt={altFor(images[activeIndex], activeIndex)}
                    className="block w-full rounded-lg"
                  />
                </motion.div>

                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label={t.projectPage.closeImage}
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
