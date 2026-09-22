"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });
  const size = useSpring(28, { stiffness: 300, damping: 26, mass: 0.4 });
  const offset = useTransform(size, (s) => -s / 2);

  useEffect(() => {
    size.set(hovering ? 56 : 28);
  }, [hovering, size]);

  useEffect(() => {
    if (reduce) return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    document.documentElement.classList.add("cursor-none-active");

    const handleMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);

    return () => {
      document.documentElement.classList.remove("cursor-none-active");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
    };
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <>
      <motion.div aria-hidden="true" className="cursor-dot" style={{ x, y }} />
      <motion.div
        aria-hidden="true"
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          width: size,
          height: size,
          marginLeft: offset,
          marginTop: offset,
          opacity: hovering ? 0.5 : 1,
        }}
      />
    </>
  );
}
