"use client";

import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Your Data",
    description:
      "Link your existing CRM, portfolio data, and compliance records. BookRunner syncs with your data hub in minutes — no migration headaches, no lost contacts.",
    visual: (
      <div className="space-y-3">
        {["Salesforce CRM", "Bloomberg Terminal", "PitchBook", "DocuSign"].map((name, i) => (
          <div key={i} className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
            <div className="w-8 h-8 bg-gradient-to-br from-gold-400/20 to-gold-400/5 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-gold-400 rounded-sm" />
            </div>
            <span className="text-sm text-white/70">{name}</span>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-xs text-green-400">Connected</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "02",
    title: "Launch & Customize",
    description:
      "Choose from dozens of FINRA-compliant templates or build from scratch. Our AI helps generate content aligned to your strategy and brand, then routes everything through compliance.",
    visual: (
      <div className="space-y-4">
        <div className="flex gap-3">
          {["Modern Fund", "Classic RIA", "Growth PE"].map((t, i) => (
            <div key={i} className={`flex-1 rounded-xl border ${i === 0 ? 'border-gold-400/50 bg-gold-400/5' : 'border-white/[0.06] bg-white/[0.02]'} p-3 text-center`}>
              <div className={`w-full h-16 rounded-lg mb-2 ${i === 0 ? 'bg-gradient-to-br from-gold-400/20 to-gold-400/5' : 'bg-white/[0.03]'}`} />
              <span className="text-xs text-white/60">{t}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-white/[0.03] rounded-xl px-4 py-3 border border-white/[0.06]">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-white/50">AI generating compliant copy...</span>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Raise Capital & Close Deals",
    description:
      "Activate outreach campaigns, track investor engagement, A/B test your messaging, and watch your pipeline grow. BookRunner handles the heavy lifting while you focus on relationships.",
    visual: (
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-white/[0.03] rounded-xl px-4 py-3 border border-white/[0.06]">
          <div>
            <div className="text-sm font-medium text-white">Fund III Campaign</div>
            <div className="text-xs text-white/40">247 investors contacted</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-green-400">$18.4M</div>
            <div className="text-xs text-white/40">committed</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.06] text-center">
            <div className="text-lg font-bold text-gold-400">68%</div>
            <div className="text-[10px] text-white/40">Open Rate</div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.06] text-center">
            <div className="text-lg font-bold text-white">24%</div>
            <div className="text-[10px] text-white/40">Reply Rate</div>
          </div>
          <div className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.06] text-center">
            <div className="text-lg font-bold text-green-400">12</div>
            <div className="text-[10px] text-white/40">Meetings</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="container-wide">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-gold-400 mb-4">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            From zero to{" "}
            <span className="font-display italic gradient-text">capital raised</span>
            <br />
            in three steps
          </h2>
        </div>

        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-0 translate-x-1/2 z-20">
                  <ArrowRight className="w-6 h-6 text-white/10" />
                </div>
              )}
              <div className="glass-card-hover p-8 h-full">
                <div className="text-5xl font-bold text-white/[0.05] mb-4 font-display">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  {step.description}
                </p>
                <div>{step.visual}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
