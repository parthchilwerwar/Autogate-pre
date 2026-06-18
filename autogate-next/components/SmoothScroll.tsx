"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// Lenis smooth scroll, driven by GSAP's ticker and kept in sync with ScrollTrigger.
// Without this wiring ScrollTrigger reads stale scroll positions, which is why the
// demo/setup timelines were firing (and finishing) before the user scrolled to them.
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    // ScrollTrigger updates on every Lenis scroll frame.
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker (single RAF loop, perfectly in step with GSAP).
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Recalculate trigger positions once everything (fonts, images) has settled.
    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{ autoRaf: false, lerp: 0.1, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
