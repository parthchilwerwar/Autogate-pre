"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

// Aceternity UI — Hover Border Gradient (adapted to keep a solid lime inner button).
// A soft gradient light travels around the pill while idle and sweeps to a full
// lime glow on hover. The inner content keeps its own styling via `className`.
export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.AllHTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (current: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const i = directions.indexOf(current);
    const next = clockwise
      ? (i - 1 + directions.length) % directions.length
      : (i + 1) % directions.length;
    return directions[next];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(202,248,1,0.9) 0%, rgba(202,248,1,0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(202,248,1,0.9) 0%, rgba(202,248,1,0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, rgba(202,248,1,0.9) 0%, rgba(202,248,1,0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, rgba(202,248,1,0.9) 0%, rgba(202,248,1,0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181% at 50% 50%, #CAF801 0%, rgba(202,248,1,0) 100%)";

  useEffect(() => {
    if (hovered) return;
    const interval = setInterval(() => {
      setDirection((prev) => rotateDirection(prev));
    }, duration * 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-flex h-min w-fit shrink-0 items-center justify-center overflow-visible rounded-full p-px decoration-clone",
        containerClassName
      )}
      {...props}
    >
      {/* Inner button — keeps the original lime styling */}
      <div className={cn("relative z-10 rounded-[inherit]", className)}>
        {children}
      </div>

      {/* Travelling gradient ring */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
        style={{ filter: "blur(3px)" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
    </Tag>
  );
}
