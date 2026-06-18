"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

// Scroll-reveal wrapper reproducing the original `.feature-row` animation:
// gsap.from({ opacity: 0, y: 40 }) triggered at "top 80%".
export default function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(ref.current, {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
