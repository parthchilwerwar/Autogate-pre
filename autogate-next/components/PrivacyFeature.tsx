import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function PrivacyFeature() {
  return (
    <section
      id="privacy-feature"
      className="py-[100px] px-6 border-t border-white/5 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-lime/5 blur-[100px] rounded-full pointer-events-none" />
      <Reveal className="max-w-[1000px] mx-auto text-center relative z-10 feature-row">
        <div className="w-16 h-16 rounded-full bg-lime/10 border border-lime/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(202,248,1,0.15)]">
          <ShieldCheck className="w-8 h-8 text-lime" />
        </div>
        <h2 className="font-serif text-[40px] md:text-[56px] leading-[1.1] mb-6">
          Zero cloud. <span className="italic text-warm/60">Zero compromise.</span>
        </h2>
        <p className="font-sans text-[18px] text-warm/70 max-w-2xl mx-auto leading-relaxed">
          We believe your financial data is yours alone. By using Android&apos;s
          native SMS receiver and an on-device rule engine, AutoBudget achieves
          something traditional apps cannot: absolute privacy without sacrificing
          instant categorization.
        </p>
      </Reveal>
    </section>
  );
}
