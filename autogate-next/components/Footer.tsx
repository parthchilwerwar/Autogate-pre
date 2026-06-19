import Image from "next/image";
import Link from "next/link";
import { REPO_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between px-10 py-8 border-t border-white/5 text-center md:text-left gap-4 bg-[#090909]">
      <a
        href="#top"
        className="flex items-center gap-3 no-underline hover:opacity-80 transition"
      >
        <Image
          src="/autobudget.png"
          alt="AutoBudget"
          width={24}
          height={24}
          className="w-[24px] h-[24px] rounded-[6px] border border-white/10"
        />
        <span className="font-serif text-[18px] text-cream">AutoBudget</span>
      </a>

      <div className="flex flex-wrap justify-center items-center gap-6 font-mono text-[11px] uppercase tracking-widest">
        <Link href="/privacy" className="text-warm/50 hover:text-lime transition">
          Privacy
        </Link>
        <Link href="/terms" className="text-warm/50 hover:text-lime transition">
          Terms &amp; Conditions
        </Link>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-warm/50 hover:text-lime transition"
        >
          GitHub
        </a>
      </div>

      <span className="font-mono text-[10px] text-warm/20 uppercase tracking-widest">
        © 2026 AutoBudget
      </span>
    </footer>
  );
}
