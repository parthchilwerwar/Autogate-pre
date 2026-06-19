import { Calendar, PieChart, DownloadCloud } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GlowingCard } from "@/components/ui/glowing-card";

export default function AnalyticsFeature() {
  return (
    <section
      id="analytics-feature"
      className="py-[120px] px-6 border-t border-white/5 bg-[#090909] relative"
    >
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 md:order-1 relative feature-row">
          <GlowingCard>
          <div className="w-full h-[420px] rounded-[32px] border border-white/10 bg-[#111] p-8 shadow-2xl flex flex-col justify-between overflow-hidden relative group">
            {/* Decorative grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="relative z-10">
              <h4 className="font-mono text-[11px] text-lime tracking-widest uppercase mb-3 px-3 py-1 bg-lime/10 border border-lime/20 rounded-full inline-block">
                Weekly Review
              </h4>
              <p className="font-serif text-3xl text-cream mb-2">
                Spending is down 15%
              </p>
              <p className="text-warm/50 text-sm font-sans">
                Compared to last week&apos;s average.
              </p>
            </div>

            <div className="relative z-10 flex items-end gap-3 h-48 mt-10">
              <div className="flex-1 bg-white/5 h-[40%] rounded-t-xl group-hover:h-[45%] transition-all duration-500" />
              <div className="flex-1 bg-white/5 h-[60%] rounded-t-xl group-hover:h-[55%] transition-all duration-500" />
              <div className="flex-1 bg-white/5 h-[30%] rounded-t-xl group-hover:h-[40%] transition-all duration-500" />
              <div className="flex-1 bg-white/5 h-[80%] rounded-t-xl group-hover:h-[70%] transition-all duration-500" />
              <div className="flex-1 bg-lime h-[50%] rounded-t-xl shadow-[0_0_20px_rgba(202,248,1,0.3)] border-t border-lime/50 group-hover:h-[35%] transition-all duration-500" />
            </div>
          </div>
          </GlowingCard>
        </Reveal>

        <Reveal className="order-1 md:order-2 space-y-6 feature-row">
          <h2 className="font-serif text-[40px] md:text-[48px] leading-tight">
            Insights that make <br />
            <span className="italic text-lime">perfect sense.</span>
          </h2>
          <p className="font-sans text-lg text-warm/70 leading-relaxed">
            Spot trends before they break the bank. AutoBudget provides stunning,
            instant visualizations of your spending habits calculated entirely on
            your device&apos;s secure local storage.
          </p>
          <div className="pt-4 flex flex-col gap-4">
            <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center shrink-0">
                <Calendar className="text-lime w-5 h-5" />
              </div>
              <span className="text-cream text-md">Daily &amp; Weekly Breakdowns</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center shrink-0">
                <PieChart className="text-lime w-5 h-5" />
              </div>
              <span className="text-cream text-md">Smart Category-level Tracking</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center shrink-0">
                <DownloadCloud className="text-lime w-5 h-5" />
              </div>
              <span className="text-cream text-md">Export to CSV instantly</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
