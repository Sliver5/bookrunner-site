"use client";

import LeadForm from "@/components/LeadForm";

export default function CTA() {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/[0.05] rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/[0.03] rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Ready to accelerate your{" "}
            <span className="font-display italic gradient-text">
              capital raising?
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            Join 2,400+ financial firms already using BookRunner to build their brand,
            reach investors, and close more deals.
          </p>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
