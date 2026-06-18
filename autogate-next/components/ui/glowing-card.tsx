"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Aceternity-style Glowing Effect, trimmed to a self-contained wrapper: a lime
// glow rides the card's border and follows the cursor on hover. The wrapper adds
// a 1px ring of glow around whatever card you nest inside it.
export function GlowingCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn("group relative rounded-[33px] p-px", className)}
    >
      {/* Glow ring that tracks the pointer — only the 1px border edge shows it */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(202,248,1,0.55), transparent 60%)",
        }}
      />
      <div className="relative h-full rounded-[32px]">{children}</div>
    </div>
  );
}
