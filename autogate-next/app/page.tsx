import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhoneDemo from "@/components/PhoneDemo";
import PrivacyFeature from "@/components/PrivacyFeature";
import HowItWorks from "@/components/HowItWorks";
import AnalyticsFeature from "@/components/AnalyticsFeature";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PhoneDemo />
      <PrivacyFeature />
      <HowItWorks />
      <AnalyticsFeature />
      <CTA />
      <Footer />
    </>
  );
}
