"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from("#eyebrow", { opacity: 0, y: 20, duration: 1 }, 0.2)
        .from("#hero-title", { opacity: 0, y: 30, duration: 0.9 }, 0.3)
        .from("#hero-subtitle", { opacity: 0, y: 20, duration: 0.8 }, 0.5);
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="top"
      className="relative pt-[180px] pb-24 px-6 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Aceternity Spotlight — premium light beam drifting in behind the headline */}
      <Spotlight className="-top-40 left-0 z-0 md:-top-20 md:left-60" fill="#CAF801" />

      <div
        id="eyebrow"
        className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 bg-lime/10 border border-lime/20"
      >
        <span className="font-mono text-[10px] text-lime tracking-[0.14em]">
          WALLET TRACKER FOR ANDROID
        </span>
      </div>

      <h1
        id="hero-title"
        className="relative z-10 font-serif font-normal leading-[0.95] tracking-[-0.03em] mb-6 max-w-4xl"
        style={{ fontSize: "clamp(56px,8vw,110px)" }}
      >
        Total financial control, <br />
        <span className="italic text-lime">absolute privacy.</span>
      </h1>

      <p
        id="hero-subtitle"
        className="relative z-10 font-sans text-[18px] md:text-[20px] leading-[1.7] max-w-[600px] mx-auto mb-10 text-warm"
      >
        No cloud sync, no API keys, no monthly fees. AutoBudget uses Android&apos;s
        native SMS receiver and an instant on-device rule engine to categorize
        every penny.
      </p>

      {/* Background glow for hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lime/5 blur-[120px] pointer-events-none rounded-full -z-10" />
    </section>
  );
}
