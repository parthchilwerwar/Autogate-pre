"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { BellRing, Zap, Plus, Check } from "lucide-react";

export default function HowItWorks() {
  const root = useRef<HTMLElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Entrance: heading and phone reveal as the section scrolls into view.
      gsap.from("#setup-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#how-it-works", start: "top 75%" },
      });
      gsap.from("#setup-phone", {
        opacity: 0,
        y: 70,
        scale: 0.94,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "#how-it-works", start: "top 75%" },
      });

      const setupMasterTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#how-it-works",
          start: "top 65%",
          toggleActions: "play pause resume pause",
        },
        repeat: -1,
        repeatDelay: 1.8,
      });

      setupMasterTl
        // Reset the budget readout at the start of every loop iteration.
        .add(() => {
          if (budgetRef.current) budgetRef.current.textContent = "₹0";
        })
        // Screen 1
        .to("#setup-step-1", { opacity: 1, duration: 0.3 })
        .to("#setup-allow-btn", { scale: 0.95, duration: 0.1, delay: 0.8 })
        .to("#setup-allow-btn", { scale: 1, duration: 0.1 })

        // Transition to Screen 2
        .to("#setup-screen-1", { x: "-100%", duration: 0.5, ease: "power3.inOut" }, "+=0.2")
        .to("#setup-screen-2", { x: "0%", duration: 0.5, ease: "power3.inOut" }, "<")
        .to("#setup-step-1", { opacity: 0.4, duration: 0.3 }, "<")
        .to("#setup-step-2", { opacity: 1, duration: 0.3 }, "<")

        // Button click on screen 2
        .to("#setup-shortcut-btn", { scale: 0.95, duration: 0.1, delay: 0.8 })
        .to("#setup-shortcut-btn", { scale: 1, duration: 0.1 })

        // Transition to Screen 3
        .to("#setup-screen-2", { x: "-100%", duration: 0.5, ease: "power3.inOut" }, "+=0.2")
        .to("#setup-screen-3", { x: "0%", duration: 0.5, ease: "power3.inOut" }, "<")
        .to("#setup-step-2", { opacity: 0.4, duration: 0.3 }, "<")
        .to("#setup-step-3", { opacity: 1, duration: 0.3 }, "<")

        // Animate typing budget amount
        .to(
          { val: 0 },
          {
            val: 15000,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: function () {
              const val = Math.round(this.targets()[0].val as number);
              if (budgetRef.current)
                budgetRef.current.textContent = "₹" + val.toLocaleString("en-IN");
            },
          },
          "+=0.2"
        )
        // flash numeric keys to simulate typing
        .to(
          ["#key-1", "#key-5", "#key-0"],
          {
            backgroundColor: "rgba(202,248,1,0.3)",
            scale: 0.9,
            duration: 0.1,
            stagger: 0.2,
            yoyo: true,
            repeat: 1,
          },
          "-=1"
        )
        .fromTo(
          "#budget-input",
          { scale: 1 },
          { scale: 1.05, color: "#CAF801", duration: 0.2, yoyo: true, repeat: 1 },
          "-=0.2"
        )

        // Button click on Screen 3
        .to("#setup-continue-btn", { scale: 0.95, duration: 0.1, delay: 0.5 })
        .to("#setup-continue-btn", { scale: 1, duration: 0.1 })

        // Transition to Screen 4
        .to("#setup-screen-3", { x: "-100%", duration: 0.5, ease: "power3.inOut" }, "+=0.2")
        .to("#setup-screen-4", { x: "0%", duration: 0.5, ease: "power3.inOut" }, "<")
        .to("#setup-step-3", { opacity: 0.4, duration: 0.3 }, "<")
        .to("#setup-step-4", { opacity: 1, duration: 0.3 }, "<");
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="how-it-works"
      className="py-[120px] px-6 border-t border-white/5 relative z-10 bg-[#090909]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div id="setup-heading" className="text-center mb-24">
          <h2 className="font-serif text-[48px] md:text-[56px] leading-tight mb-4">
            Setup in <span className="italic text-lime">4 easy steps.</span>
          </h2>
          <p className="font-sans text-lg text-warm/70 max-w-xl mx-auto">
            No bank logins, no OAuth flows. Just pure local interception.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Side (Left) */}
          <div className="relative flex justify-center" style={{ perspective: "1000px" }}>
            <div className="phone-mockup" id="setup-phone">
              <div className="phone-notch" />

              {/* Setup UI inside phone */}
              <div className="absolute inset-0 pt-16 bg-[#090909] flex flex-col z-20 overflow-hidden">
                {/* Screen 1: Grant Access */}
                <div
                  className="absolute inset-0 flex-1 flex flex-col justify-center px-8 text-center pb-12 will-change-transform"
                  id="setup-screen-1"
                >
                  <div className="w-24 h-24 bg-lime/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-lime/20 shadow-[0_0_40px_rgba(202,248,1,0.15)] relative">
                    <div
                      className="absolute inset-0 rounded-3xl bg-lime/10 animate-ping"
                      style={{ animationDuration: "3s" }}
                    />
                    <BellRing className="w-10 h-10 text-lime" />
                  </div>
                  <h3 className="font-serif text-3xl text-cream mb-4">Tracking Access</h3>
                  <p className="font-sans text-[15px] text-warm/60 mb-12 leading-relaxed">
                    Autogate securely reads transaction push alerts to track your
                    spending instantly.
                  </p>
                  <div
                    className="w-full bg-lime text-black1 font-bold py-4 rounded-[16px] shadow-[0_8px_20px_rgba(202,248,1,0.2)]"
                    id="setup-allow-btn"
                  >
                    Allow Permissions
                  </div>
                  <div className="w-full text-warm/40 font-medium py-4 mt-2 text-sm">
                    Not Now
                  </div>
                </div>

                {/* Screen 2: iOS Automation */}
                <div
                  className="absolute inset-0 flex-1 flex flex-col justify-center px-8 text-center pb-12 translate-x-full will-change-transform"
                  id="setup-screen-2"
                >
                  <div className="w-24 h-24 bg-[#1C1C1E] rounded-[24px] flex items-center justify-center mx-auto mb-8 border border-white/5 shadow-2xl relative">
                    <Zap className="w-10 h-10 text-lime drop-shadow-[0_0_15px_rgba(202,248,1,0.4)]" />
                  </div>
                  <h3 className="font-serif text-3xl text-cream mb-4">iOS Automation</h3>
                  <p className="font-sans text-[15px] text-warm/60 mb-12 leading-relaxed">
                    Install the required Apple Shortcut to seamlessly route intercepted
                    notifications locally to the app engine.
                  </p>
                  <div
                    className="w-full bg-[#1C1C1E] text-lime border border-lime/30 font-bold py-4 rounded-[16px] shadow-[0_8px_20px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2"
                    id="setup-shortcut-btn"
                  >
                    <Plus className="w-5 h-5" /> Add Shortcut
                  </div>
                </div>

                {/* Screen 3: Set Budgets */}
                <div
                  className="absolute inset-0 pt-16 flex-1 flex flex-col px-6 pb-12 translate-x-full will-change-transform"
                  id="setup-screen-3"
                >
                  <h3 className="font-serif text-3xl text-cream mb-2 mt-4 text-center">
                    Set Budget
                  </h3>
                  <p className="font-sans text-[14px] text-warm/60 mb-6 text-center">
                    How much do you want to spend on Groceries?
                  </p>

                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div
                      className="text-lime font-mono text-[42px] mb-8 tracking-tighter"
                      id="budget-input"
                      ref={budgetRef}
                    >
                      ₹0
                    </div>

                    {/* Fake Keypad */}
                    <div className="grid grid-cols-3 gap-3 w-full max-w-[220px] mx-auto opacity-50">
                      <div
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl font-mono mx-auto"
                        id="key-1"
                      >
                        1
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl font-mono mx-auto">
                        2
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl font-mono mx-auto">
                        3
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl font-mono mx-auto">
                        4
                      </div>
                      <div
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl font-mono mx-auto"
                        id="key-5"
                      >
                        5
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl font-mono mx-auto bg-white/5">
                        6
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl font-mono mx-auto">
                        7
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl font-mono mx-auto">
                        8
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl font-mono mx-auto">
                        9
                      </div>
                      <div />
                      <div
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl font-mono mx-auto bg-white/5"
                        id="key-0"
                      >
                        0
                      </div>
                      <div />
                    </div>
                  </div>

                  <div
                    className="mt-auto w-full bg-lime text-black1 font-bold py-4 rounded-[16px] text-center shadow-[0_8px_20px_rgba(202,248,1,0.2)]"
                    id="setup-continue-btn"
                  >
                    Save Budget
                  </div>
                </div>

                {/* Screen 4: Live Your Life (Success) */}
                <div
                  className="absolute inset-0 pt-16 flex-1 flex flex-col justify-center px-6 text-center pb-20 translate-x-full will-change-transform"
                  id="setup-screen-4"
                >
                  <div className="w-28 h-28 mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-lime/20 rounded-full blur-xl pulse-slow" />
                    <div className="w-full h-full bg-lime rounded-full flex items-center justify-center text-black1 shadow-[0_10px_40px_rgba(202,248,1,0.4)]">
                      <Check className="w-12 h-12 stroke-[3]" />
                    </div>
                  </div>
                  <h3 className="font-serif text-4xl text-cream mb-4">All Set!</h3>
                  <p className="font-sans text-[16px] text-warm/60 leading-relaxed">
                    Autopilot is active. Spend naturally, and we&apos;ll track the rest.
                  </p>
                </div>

                {/* Fake Home Indicator bottom */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full z-50" />
              </div>
            </div>
          </div>

          {/* Steps Side (Right) */}
          <div className="space-y-6 mt-12 lg:mt-0 pl-0 lg:pl-10">
            {/* Step 1 */}
            <div
              className="setup-step flex items-start gap-6 group opacity-40"
              id="setup-step-1"
            >
              <div className="w-12 h-12 rounded-full bg-black1 border-[3px] border-lime/30 group-hover:border-lime group-hover:shadow-[0_0_20px_rgba(202,248,1,0.3)] text-lime flex items-center justify-center font-mono font-bold transition-all shrink-0 duration-500">
                01
              </div>
              <div className="pt-1">
                <h4 className="font-serif text-[26px] mb-2 text-cream group-hover:text-lime transition-colors">
                  Grant Access
                </h4>
                <p className="text-warm/70 leading-relaxed text-[15px]">
                  Allow push notification interception to securely capture
                  transactions offline.
                </p>
              </div>
            </div>

            <div className="w-[2px] h-6 bg-gradient-to-b from-lime/30 to-transparent ml-[23px] opacity-50" />

            {/* Step 2 */}
            <div
              className="setup-step flex items-start gap-6 group opacity-40"
              id="setup-step-2"
            >
              <div className="w-12 h-12 rounded-full bg-black1 border-[3px] border-lime/30 group-hover:border-lime group-hover:shadow-[0_0_20px_rgba(202,248,1,0.3)] text-lime flex items-center justify-center font-mono font-bold transition-all shrink-0 duration-500">
                02
              </div>
              <div className="pt-1">
                <h4 className="font-serif text-[26px] mb-2 text-cream group-hover:text-lime transition-colors">
                  Add Shortcut
                </h4>
                <p className="text-warm/70 leading-relaxed text-[15px]">
                  Install an Apple Automation Shortcut to route notifications perfectly
                  every time.
                </p>
              </div>
            </div>

            <div className="w-[2px] h-6 bg-gradient-to-b from-lime/30 to-transparent ml-[23px] opacity-50" />

            {/* Step 3 */}
            <div
              className="setup-step flex items-start gap-6 group opacity-40"
              id="setup-step-3"
            >
              <div className="w-12 h-12 rounded-full bg-black1 border-[3px] border-lime/30 group-hover:border-lime group-hover:shadow-[0_0_20px_rgba(202,248,1,0.3)] text-lime flex items-center justify-center font-mono font-bold transition-all shrink-0 duration-500">
                03
              </div>
              <div className="pt-1">
                <h4 className="font-serif text-[26px] mb-2 text-cream group-hover:text-lime transition-colors">
                  Set Budgets
                </h4>
                <p className="text-warm/70 leading-relaxed text-[15px]">
                  Define limits. Local AI adapts its routing rules based on your unique
                  behavior.
                </p>
              </div>
            </div>

            <div className="w-[2px] h-6 bg-gradient-to-b from-lime/30 to-transparent ml-[23px] opacity-50" />

            {/* Step 4 */}
            <div
              className="setup-step flex items-start gap-6 group opacity-40"
              id="setup-step-4"
            >
              <div className="w-12 h-12 rounded-full bg-black1 border-[3px] border-lime/30 group-hover:border-lime group-hover:shadow-[0_0_20px_rgba(202,248,1,0.3)] text-lime flex items-center justify-center font-mono font-bold transition-all shrink-0 duration-500">
                04
              </div>
              <div className="pt-1">
                <h4 className="font-serif text-[26px] mb-2 text-cream group-hover:text-lime transition-colors">
                  Complete &amp; Live
                </h4>
                <p className="text-warm/70 leading-relaxed text-[15px]">
                  Pay anywhere. Autogate instantly catches the alert and logs exactly
                  what happened.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
