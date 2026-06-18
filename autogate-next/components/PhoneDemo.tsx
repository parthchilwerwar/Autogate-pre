"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import {
  ShoppingBag,
  House,
  ArrowRightLeft,
  Plus,
  PieChart,
  User,
  Building2,
  Coffee,
} from "lucide-react";

export default function PhoneDemo() {
  const root = useRef<HTMLElement>(null);
  const balanceRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Entrance: text column slides up and the phone fades/scales in as the
      // section scrolls into view.
      gsap.from("#demo-text-col", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#demo", start: "top 75%" },
      });
      gsap.from("#demo-phone", {
        opacity: 0,
        y: 70,
        scale: 0.94,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#demo", start: "top 75%" },
      });

      // The Starbucks row is rendered in markup but collapsed until its moment.
      gsap.set("#new-tx", {
        height: 0,
        opacity: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "hidden",
      });

      const demoMasterTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#demo",
          start: "top 65%",
          toggleActions: "play pause resume pause",
        },
        repeat: -1,
        repeatDelay: 1.6,
      });

      demoMasterTl
        // Reset the dashboard balance at the start of every loop iteration.
        .add(() => {
          if (balanceRef.current) balanceRef.current.textContent = "₹1,14,500";
        })
        // Flash Step 1 active
        .to("#step-1", { opacity: 1, duration: 0.3 })
        // Slide down the notification
        .to("#push-notif", { top: "30px", duration: 0.8, ease: "back.out(1.2)" })
        .to("#push-notif", { top: "30px", duration: 1.5 }) // hold

        // Enter Step 2 & LLM Overlay
        .to("#step-1", { opacity: 0.4, duration: 0.3 })
        .to("#step-2", { opacity: 1, duration: 0.3 }, "<")
        .to(
          "#llm-engine",
          { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.6, ease: "power3.out" }
        )

        .to("#llm-text", {
          text: 'Categorized: "Food & Dining" (99.2%)',
          duration: 0.1,
          delay: 1.5,
        })

        // Remove Notification & LLM
        .to("#push-notif", { top: "-150px", duration: 0.5, ease: "power2.in" }, "+=0.8")
        .to("#llm-engine", { opacity: 0, y: 20, duration: 0.5, ease: "power2.in" }, "<")

        // Enter Step 3 & Update UI
        .to("#step-2", { opacity: 0.4, duration: 0.3 })
        .to("#step-3", { opacity: 1, duration: 0.3 }, "<")

        // Change dashboard values dynamically
        .to("#dashboard-balance", { opacity: 0, y: -10, duration: 0.2 })
        .add(() => {
          if (balanceRef.current) balanceRef.current.textContent = "₹1,13,950";
        })
        .to("#dashboard-balance", { opacity: 1, y: 0, duration: 0.4, color: "#CAF801" })

        // Grow the bar chart
        .to("#current-bar", {
          height: "80%",
          background: "#fb7185",
          color: "#131313",
          duration: 0.6,
          ease: "power3.out",
        })

        // Reveal the new Starbucks transaction at the top of the list
        .to("#new-tx", {
          height: "auto",
          opacity: 1,
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          duration: 0.6,
          ease: "power3.out",
        })
        .to("#dashboard-balance", { color: "#FFFBF6", duration: 0.6, delay: 0.5 });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="demo"
      className="py-[120px] px-6 relative overflow-hidden bg-black2 border-y border-white/5"
    >
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Side */}
        <div id="demo-text-col" className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-lime" />
              <span className="font-mono text-[11px] text-lime tracking-[0.15em]">
                LIVE DEMO
              </span>
            </div>
            <h2 className="font-serif text-[48px] leading-tight mb-6">
              Watch the magic happen{" "}
              <span className="italic text-warm/50">in real-time.</span>
            </h2>
            <p className="font-sans text-lg text-warm leading-relaxed">
              Unlike traditional trackers that poll APIs every 24 hours, Autogate
              intercepts push notifications instantly and uses a 4-bit quantized AI
              model to organize it offline.
            </p>
          </div>

          <div className="space-y-6">
            <div
              className="demo-step flex items-start gap-4 opacity-40"
              id="step-1"
            >
              <div className="font-mono text-[24px] text-lime font-light">01</div>
              <div>
                <h4 className="font-serif text-[22px] mb-2">Native Interception</h4>
                <p className="text-sm text-warm/80">
                  You buy a coffee. The bank sends a push notification. Autogate
                  intercepts it within {"<"}10ms.
                </p>
              </div>
            </div>
            <div className="w-[1px] h-6 bg-lime/30 ml-4" />

            <div
              className="demo-step flex items-start gap-4 opacity-40"
              id="step-2"
            >
              <div className="font-mono text-[24px] text-lime font-light">02</div>
              <div>
                <h4 className="font-serif text-[22px] mb-2">
                  On-Device Categorization
                </h4>
                <p className="text-sm text-warm/80">
                  llama.rn spins up. The local language model reads &quot;Starbucks
                  ₹550&quot; and confidently tags it as &quot;Food &amp; Dining&quot;.
                  No cloud required.
                </p>
              </div>
            </div>
            <div className="w-[1px] h-6 bg-lime/30 ml-4" />

            <div
              className="demo-step flex items-start gap-4 opacity-40"
              id="step-3"
            >
              <div className="font-mono text-[24px] text-lime font-light">03</div>
              <div>
                <h4 className="font-serif text-[22px] mb-2">Spendgate Rebalancing</h4>
                <p className="text-sm text-warm/80">
                  The transaction commits instantly via MMKV storage. Dynamic rules
                  map the deduction to your budget chart.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Side */}
        <div className="relative flex justify-center" style={{ perspective: "1000px" }}>
          <div className="phone-mockup" id="demo-phone">
            <div className="phone-notch" />

            {/* App Interface */}
            <div className="absolute inset-0 pt-16 flex flex-col bg-[#090909]">
              <div className="px-6 flex-1 flex flex-col relative z-20">
                <div className="flex justify-between items-center mb-8" id="app-header">
                  <div>
                    <p className="font-mono text-[10px] text-warm/50 mb-1 tracking-wider uppercase">
                      APRIL BUDGET
                    </p>
                    <div
                      className="font-serif text-[38px] text-cream"
                      id="dashboard-balance"
                      ref={balanceRef}
                    >
                      ₹1,14,500
                      <span className="text-[20px] text-warm/50"></span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-black1 flex items-center justify-center shadow-[0_0_15px_rgba(202,248,1,0.1)]">
                    <Image
                      src="/autogate.png"
                      alt="Autogate"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </div>

                {/* Spending Graph */}
                <div
                  className="h-32 mb-8 relative border-b border-lime/20 flex items-end gap-2 px-1"
                  id="app-graph"
                >
                  {/* Grid background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_20px] pointer-events-none" />
                  <div className="w-1/6 bg-lime/20 h-[80%] rounded-t-sm z-10 border-t border-lime/30" />
                  <div className="w-1/6 bg-lime/30 h-[60%] rounded-t-sm z-10 border-t border-lime/40" />
                  <div className="w-1/6 bg-lime/50 h-[90%] rounded-t-sm z-10 border-t border-lime/60" />
                  <div className="w-1/6 bg-lime/70 h-[40%] rounded-t-sm z-10 border-t border-lime/80" />
                  <div
                    className="w-1/6 bg-lime text-black1 flex items-start justify-center h-[50%] rounded-t-sm font-mono text-[9px] pt-1 z-10 font-bold"
                    id="current-bar"
                  >
                    Food
                  </div>
                </div>

                {/* Transactions */}
                <div className="flex-1 pb-20" id="app-tx">
                  <h4 className="font-serif text-lg mb-4 flex items-center justify-between">
                    Recent Splits{" "}
                    <span className="bg-lime/10 text-lime font-mono text-[8px] px-2 py-1 rounded tracking-widest border border-lime/20">
                      SYNCED
                    </span>
                  </h4>
                  <div className="space-y-0" id="tx-list">
                    {/* Injected Starbucks row — collapsed until the timeline reveals it */}
                    <div
                      className="flex items-center justify-between py-3 border-b border-lime/20 bg-lime/10 px-3 -mx-3 rounded-xl"
                      id="new-tx"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-full bg-lime/20 text-lime flex items-center justify-center border border-lime/30 shadow-[0_0_10px_rgba(202,248,1,0.2)]">
                          <Coffee className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[14px] font-medium text-lime">Starbucks</p>
                          <p className="text-[10px] font-mono text-lime/70 uppercase mt-0.5 tracking-wider">
                            Food &amp; Dining
                          </p>
                        </div>
                      </div>
                      <p className="font-mono text-[14px] text-lime font-bold">- ₹550</p>
                    </div>

                    {/* Base transaction item */}
                    <div className="flex items-center justify-between py-3 border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                          <ShoppingBag className="w-4 h-4 text-warm" />
                        </div>
                        <div>
                          <p className="text-[14px] font-medium text-cream/90">
                            Grocery Store
                          </p>
                          <p className="text-[10px] font-mono text-warm/40 uppercase mt-0.5 tracking-wider">
                            Groceries
                          </p>
                        </div>
                      </div>
                      <p className="font-mono text-[14px] text-cream">- ₹4,210</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fake iOS Tab Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-[#090909]/95 backdrop-blur-xl border-t border-white/5 flex flex-row items-center justify-between px-8 pb-4 z-30">
                <div className="relative">
                  <House className="w-5 h-5 text-lime fill-lime/20 cursor-pointer" />
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-lime rounded-full" />
                </div>
                <ArrowRightLeft className="w-5 h-5 text-warm/40 cursor-pointer" />
                <div className="w-11 h-11 rounded-full bg-lime text-black1 flex items-center justify-center -translate-y-3 shadow-[0_4px_20px_rgba(202,248,1,0.3)] cursor-pointer">
                  <Plus className="w-6 h-6" />
                </div>
                <PieChart className="w-5 h-5 text-warm/40 cursor-pointer" />
                <User className="w-5 h-5 text-warm/40 cursor-pointer" />
              </div>
            </div>

            {/* Notification Overlay */}
            <div className="notification" id="push-notif">
              <div className="w-8 h-8 rounded-lg bg-black1 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.2)]">
                <Building2 className="w-4 h-4 text-lime" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-black1/70 uppercase tracking-widest mb-0.5 font-bold">
                  HDFC BANK
                </p>
                <p className="text-[13px] font-medium leading-tight text-black1">
                  Transaction of ₹550 at{" "}
                  <span className="font-bold text-[#111]">Starbucks #499</span> was
                  authorized.
                </p>
              </div>
            </div>

            {/* LLM Scanner Overlay */}
            <div className="llm-engine-overlay" id="llm-engine">
              <div className="font-mono text-[11px] font-bold text-black1 bg-lime px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(202,248,1,0.3)]">
                <span id="llm-text">Updating...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
