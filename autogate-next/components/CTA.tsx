import Image from "next/image";
import { Download } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";
import { TextureButton } from "@/components/ui/texture-button";
import { APK_URL, APK_SIZE } from "@/lib/site";

// Static section — hover behaviour is pure CSS, so this stays a server component.
export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-[140px] px-6 text-center border-t border-white/5 overflow-hidden bg-[#0a0a0a]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center 20%, rgba(202,248,1,0.06), transparent 70%)",
        }}
      />

      {/* Aceternity Meteors — lime shower scattered behind the headline */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Meteors number={34} />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center">
        <Image
          src="/autobudget.png"
          alt="AutoBudget"
          width={80}
          height={80}
          className="w-20 h-20 mb-8 rounded-2xl rotate-3 border border-white/10 shadow-[0_0_60px_rgba(202,248,1,0.15)]"
        />

        <h2
          id="cta-headline"
          className="font-serif text-[50px] md:text-[70px] font-normal leading-tight mb-8"
        >
          Your data. Your wealth.
          <br />
          <span className="italic text-lime">Controlled entirely.</span>
        </h2>

        <p className="font-sans text-[18px] mb-12 text-warm max-w-lg">
          Join thousands protecting their privacy and mastering their budget using
          military-grade on-device offline intelligence.
        </p>

        <TextureButton
          as="a"
          href={APK_URL}
          variant="brand"
          size="lg"
          className="w-auto"
        >
          <span className="flex items-center gap-2 px-7 py-2 text-[18px] font-bold">
            <Download className="w-6 h-6" />
            Install AutoBudget
          </span>
        </TextureButton>

        <p className="mt-5 font-mono text-[11px] text-warm/40 uppercase tracking-widest">
          Direct APK install · {APK_SIZE} · No Play Store account needed
        </p>
      </div>
    </section>
  );
}
