import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />
      <Hero />
      <LogoBar />
      <Features />
      <HowItWorks />
      <Metrics />
      <Solutions />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
