"use client";

import { cn } from "@/lib/utils";

// Aceternity UI — Meteors, tuned into a lime shower for the dark CTA.
// Streaks are scattered across the whole section (not just the top edge) so they
// read clearly behind the centred headline, each falling diagonally with a glowing
// head + fading tail. Positions/delays/durations are deterministic so server and
// client render identically (no hydration mismatch).
export function Meteors({
  number = 30,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const meteors = Array.from({ length: number });
  return (
    <>
      {meteors.map((_, idx) => {
        // Deterministic scatter across the full width and most of the height.
        const left = `${((idx * 41) % 130) - 15}%`;
        const top = `${((idx * 29) % 95) - 10}%`;
        const delay = `${((idx * 0.37) % 3.5).toFixed(2)}s`;
        const duration = `${(2.6 + ((idx * 13) % 4)).toFixed(2)}s`;
        return (
          <span
            key={idx}
            className={cn(
              "animate-meteor-effect absolute h-[3px] w-[3px] rotate-[215deg] rounded-full bg-lime shadow-[0_0_10px_2px_rgba(202,248,1,0.55)]",
              "before:absolute before:top-1/2 before:h-px before:w-[80px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-lime before:to-transparent before:content-['']",
              className
            )}
            style={{
              top,
              left,
              animationDelay: delay,
              animationDuration: duration,
            }}
          />
        );
      })}
    </>
  );
}
