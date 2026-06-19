"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { APK_URL } from "@/lib/site";

// Floating pill nav. Toggles the `.scrolled` class past 20px — a plain scroll
// listener, not a GSAP animation, so useEffect is the right tool here.
export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef} id="nav" className="floating-nav">
      <a href="#top" className="flex items-center gap-2.5 text-cream no-underline">
        <Image
          src="/autobudget.png"
          alt="AutoBudget Logo"
          width={28}
          height={28}
          className="w-[28px] h-[28px] object-contain rounded-lg"
        />
        <span className="font-serif text-[18px]">AutoBudget</span>
      </a>
      <HoverBorderGradient
        as="a"
        href={APK_URL}
        duration={1.2}
        className="inline-flex items-center justify-center rounded-full bg-lime px-5 py-2 font-sans text-[12px] font-bold text-black1"
      >
        Get the App
      </HoverBorderGradient>
    </nav>
  );
}
