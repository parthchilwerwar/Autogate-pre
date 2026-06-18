import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Standard helper used by the Aceternity UI components: merge conditional
// class lists while letting later Tailwind utilities win over earlier ones.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
