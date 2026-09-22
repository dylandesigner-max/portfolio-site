"use client";

// Canvas-based cursor-reactive dot field. A single canvas draw call per frame
// keeps this smooth regardless of grid density (no per-dot DOM nodes).

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const spacing = 36;
    const radius = 170;

    let width = 0;
    let height = 0;
    let dots: { x: number; y: number }[] = [];
    const mouse = { x: -9999, y: -9999 };
    const target = { x: -9999, y: -9999 };
    let autoMode = true;
    const startedAt = Date.now();
    let frame = 0;

    function resize() {
      const rect = parent!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(dpr, dpr);

      dots = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      const offsetX = (width - (cols - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({ x: offsetX + i * spacing, y: offsetY + j * spacing });
        }
      }
    }

    function draw() {
      frame = requestAnimationFrame(draw);
      const now = Date.now();

      if (autoMode) {
        const t = (now - startedAt) * 0.00035;
        target.x = width / 2 + Math.sin(t) * width * 0.32;
        target.y = height / 2 + Math.cos(t * 0.8) * height * 0.28;
      }

      const follow = autoMode ? 0.06 : 0.22;
      mouse.x += (target.x - mouse.x) * follow;
      mouse.y += (target.y - mouse.y) * follow;

      const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#3d8a12";

      ctx!.clearRect(0, 0, width, height);

      for (const dot of dots) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let x = dot.x;
        let y = dot.y;
        let alpha = 0.16;
        let r = 1.3;

        if (dist < radius) {
          const force = 1 - dist / radius;
          const angle = Math.atan2(dy, dx);
          x += Math.cos(angle) * force * 16;
          y += Math.sin(angle) * force * 16;
          alpha = 0.16 + force * 0.64;
          r = 1.3 + force * 2.2;
        }

        ctx!.beginPath();
        ctx!.arc(x, y, r, 0, Math.PI * 2);
        ctx!.fillStyle = accent;
        ctx!.globalAlpha = alpha;
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      autoMode = false;
    }

    function handlePointerLeave() {
      autoMode = true;
    }

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);
    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
