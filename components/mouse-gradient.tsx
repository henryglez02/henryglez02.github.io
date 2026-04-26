"use client";

import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const MouseGradient = () => {
  useEffect(() => {
    const root = document.documentElement;
    let currentX = 0.5;
    let currentY = 0.5;
    let targetX = 0.5;
    let targetY = 0.5;
    let rafId: number;
    let frameCount = 0;
    let revealTargets: HTMLElement[] = [];

    const refreshRevealTargets = () => {
      revealTargets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-mouse-reveal]"),
      );
    };

    const updateRevealTargets = () => {
      const gradientRadius = clamp(window.innerWidth * 0.05, 44, 84);
      const pointerX = currentX * window.innerWidth;
      const pointerY = currentY * window.innerHeight;

      for (const target of revealTargets) {
        const rect = target.getBoundingClientRect();

        const dx =
          pointerX < rect.left
            ? rect.left - pointerX
            : pointerX > rect.right
              ? pointerX - rect.right
              : 0;
        const dy =
          pointerY < rect.top
            ? rect.top - pointerY
            : pointerY > rect.bottom
              ? pointerY - rect.bottom
              : 0;

        const distance = Math.hypot(dx, dy);
        const proximity = clamp(1 - distance / gradientRadius, 0, 1);

        // Calculate relative position of cursor to element (for directional effects)
        const relX = ((pointerX - rect.left) / rect.width) * 100;
        const relY = ((pointerY - rect.top) / rect.height) * 100;

        target.style.setProperty(
          "--mouse-reveal-proximity",
          proximity.toFixed(3),
        );
        target.style.setProperty("--mouse-x-rel", `${relX.toFixed(1)}%`);
        target.style.setProperty("--mouse-y-rel", `${relY.toFixed(1)}%`);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = innerWidth ? event.clientX / innerWidth : 0.5;
      targetY = innerHeight ? event.clientY / innerHeight : 0.5;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      root.style.setProperty("--mouse-x", `${currentX * 100}%`);
      root.style.setProperty("--mouse-y", `${currentY * 100}%`);

      if (frameCount % 30 === 0) {
        refreshRevealTargets();
      }

      updateRevealTargets();
      frameCount += 1;

      rafId = requestAnimationFrame(animate);
    };

    refreshRevealTargets();
    animate();
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(rafId);

      for (const target of revealTargets) {
        target.style.removeProperty("--mouse-reveal-proximity");
        target.style.removeProperty("--mouse-x-rel");
        target.style.removeProperty("--mouse-y-rel");
      }
    };
  }, []);

  return null;
};
