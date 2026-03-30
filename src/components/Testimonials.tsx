"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "BookRunner transformed how we raise capital. Our Fund III closed in half the time of Fund II, and the A/B testing on our pitch language was a game changer — we saw a 60% increase in LP meeting acceptance rates.",
    name: "Sarah Chen",
    title: "Managing Partner, Apex Growth Capital",
    metric: "$340M raised in 6 months",
  },
  {
    quote:
      "As a compliance officer, I was skeptical. But BookRunner's built-in FINRA review engine is the real deal. Every piece of content our 200+ advisors publish goes through automated compliance — and we haven't had a single violation in two years.",
    name: "Michael Torres",
    title: "Chief Compliance Officer, Meridian Wealth Partners",
    metric: "Zero violations across 200+ advisors",
  },
  {
    quote:
      "We switched from a generic website builder and the difference was night and day. Our site now speaks the language of institutional investors, our data room is integrated, and we've tripled inbound LP inquiries.",
    name: "James Whitfield",
    title: "Founder, Whitfield Capital Management",
    metric: "3x inbound LP inquiries",
  },
  {
    quote:
      "The outreach automation is brilliant. We manage buy-side mandates across 40+ deals, and BookRunner lets us personalize every touchpoint while keeping everything archived and compliant. It's become indispensable.",
    name: "Rachel Okafor",
    title: "Director, Ironbridge Advisory",
    metric: "40+ concurrent deal processes managed",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="case-studies" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-400/[0.03] rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gold-400 mb-4">
            Case Studies
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Hear from{" "}
            <span className="font-display italic gradient-text">
              industry leaders
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-10 sm:p-14 text-center relative">
            <Quote className="w-12 h-12 text-gold-400/20 mx-auto mb-8" />

            <p className="text-xl sm:text-2xl leading-relaxed text-white/70 mb-10 font-light">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400/20 to-gold-400/5 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">
                  {t.name.charAt(0)}
                </span>
              </div>
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="text-sm text-white/40">{t.title}</div>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-400/10 rounded-full">
              <div className="w-2 h-2 bg-gold-400 rounded-full" />
              <span className="text-sm font-medium text-gold-400">
                {t.metric}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-white/60" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "bg-gold-400 w-8"
                      : "bg-white/20 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-white/60" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
