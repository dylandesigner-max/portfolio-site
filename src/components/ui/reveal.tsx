"use client";

import { motion, useReducedMotion } from "motion/react";
import { clsx } from "clsx";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
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
      className={clsx(className)}
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
  render,
}: {
  items: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  stagger?: number;
  render?: (item: React.ReactNode, index: number) => React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={clsx(className)}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: reduce ? 0 : i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={clsx(itemClassName)}
        >
          {render ? render(item, i) : item}
        </motion.div>
      ))}
    </div>
  );
}
