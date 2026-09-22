"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  items,
  className,
  itemClassName,
  stagger = 0.08,
}: {
  items: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={cn(className)}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: reduce ? 0 : i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={cn(itemClassName)}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}
