import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { APK_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | AutoBudget",
};

export default function PrivacyPage() {
  return (
    <>
      {/* NAVIGATION */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-[1200] flex items-center justify-between w-[min(90vw,600px)] h-14 px-4 rounded-full bg-black1/80 border border-white/10 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2.5 text-cream no-underline">
          <Image
            src="/autobudget.png"
            alt="Logo"
            width={28}
            height={28}
            className="w-7 h-7 object-contain rounded-lg"
          />
          <span className="font-serif text-[18px]">AutoBudget</span>
        </Link>
        <a
          href={APK_URL}
          className="inline-flex items-center font-sans text-[12px] font-bold px-5 py-2 rounded-full bg-lime text-black1 hover:-translate-y-0.5 transition"
        >
          Get the App
        </a>
      </nav>

      {/* CONTENT */}
      <main className="pt-[160px] pb-[100px] px-6 max-w-[800px] mx-auto">
        <h1 className="font-serif text-[60px] leading-none mb-4">
          Privacy <span className="italic text-lime">First.</span>
        </h1>
        <p className="font-mono text-sm text-lime mb-12 uppercase tracking-widest">
          Last Updated: April 8, 2026
        </p>

        <div className="space-y-8 text-warm leading-relaxed md:text-lg">
          <section>
            <h2 className="font-serif text-3xl text-cream mb-4 border-b border-white/5 pb-2">
              1. The Anti-Data Collection Promise
            </h2>
            <p>
              AutoBudget was built fundamentally to reject modern data hoarding.{" "}
              <strong>
                We do not collect, store, sell, or transmit any of your financial data
                to external servers.
              </strong>{" "}
              Your budget, transactions, and banking institutions belong only to you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-cream mb-4 border-b border-white/5 pb-2">
              2. On-Device Rule Engine
            </h2>
            <p>
              AutoBudget categorizes transactions with a deterministic rule engine that
              executes 100% natively on your phone. Because categorization happens
              strictly on-device, your transaction descriptions (e.g. &quot;Starbucks
              #499&quot;) never cross the internet.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-cream mb-4 border-b border-white/5 pb-2">
              3. Reading Bank SMS
            </h2>
            <p>
              We require a single Android SMS read permission to detect bank
              transaction messages. We only parse SMS containing transaction amounts
              using deterministic local rules. Messages are read in memory and dropped
              instantly after categorization — no Notification Listener or Accessibility
              access is ever requested.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl text-cream mb-4 border-b border-white/5 pb-2">
              4. App Analytics
            </h2>
            <p>
              We may securely collect anonymous crash reports to resolve technical bugs
              locally. This can be globally disabled at any point via the AutoBudget
              settings tab.
            </p>
          </section>

          <section className="mt-12 bg-lime/5 border border-lime/20 p-6 rounded-2xl">
            <h2 className="font-serif text-2xl text-lime mb-2">5. Contact Us</h2>
            <p className="font-mono text-sm text-warm/80">
              If you have any questions about this absolute privacy architecture, you
              can audit our Open Source Core logic on GitHub or contact
              privacy@autobudget.app.
            </p>
          </section>
        </div>
      </main>

      <footer className="flex flex-col md:flex-row items-center justify-between px-10 py-8 border-t border-white/5 text-center md:text-left gap-4 bg-black1">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/autobudget.png"
            alt="AutoBudget"
            width={24}
            height={24}
            className="w-6 h-6 rounded-md"
          />
          <span className="font-serif text-lg text-cream">AutoBudget</span>
        </Link>
        <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widest">
          <Link href="/terms" className="text-warm/50 hover:text-lime transition">
            Terms &amp; Conditions
          </Link>
          <Link href="/" className="text-warm/50 hover:text-lime transition">
            Home
          </Link>
        </div>
      </footer>
    </>
  );
}
