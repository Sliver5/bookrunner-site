"use client";

import { TrendingUp, Users, Building2, Briefcase, ArrowUpRight } from "lucide-react";

const solutions = [
  {
    icon: TrendingUp,
    title: "Fund Managers",
    description:
      "Raise your next fund faster. From a compliant tearsheet website to automated LP outreach and data room analytics, BookRunner gives emerging and established managers the tools institutions expect.",
    features: ["LP Pipeline Management", "Data Room Analytics", "Compliant Tearsheets", "A/B Tested Pitch Decks"],
    stat: "$8.2B raised",
    statLabel: "by fund manager clients",
  },
  {
    icon: Users,
    title: "RIAs & Wealth Advisors",
    description:
      "Build a premium digital presence that converts prospects into clients. Showcase your investment philosophy, publish thought leadership, and let your website work as hard as you do — all while staying ADV-compliant.",
    features: ["Lead Capture Forms", "ADV-Compliant Content", "Client Portal", "Automated Nurture Sequences"],
    stat: "340% avg",
    statLabel: "increase in qualified leads",
  },
  {
    icon: Building2,
    title: "Broker-Dealers",
    description:
      "Scale compliant marketing across your entire firm. Give every registered rep a professional presence while maintaining centralized compliance oversight, archival, and brand consistency.",
    features: ["Multi-Rep Management", "Centralized Compliance", "Brand Templates", "FINRA Auto-Review"],
    stat: "50+ firms",
    statLabel: "managing 1,000+ rep sites",
  },
  {
    icon: Briefcase,
    title: "Investment Banks & Advisors",
    description:
      "Close deals with data-driven precision. Use BookRunner to manage buy-side and sell-side outreach, test messaging that resonates with strategic buyers, and track engagement across every touchpoint.",
    features: ["Deal Pipeline CRM", "Buyer Outreach Automation", "Engagement Scoring", "NDA Management"],
    stat: "127 deals",
    statLabel: "closed last quarter",
  },
];

export default function Solutions() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/30 to-navy-950" />
      <div className="container-wide relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-gold-400 mb-4">
            Solutions
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Built for every corner of{" "}
            <span className="font-display italic gradient-text">finance</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Whether you&apos;re raising a $50M fund or advising a $5B acquisition,
            BookRunner adapts to your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="glass-card-hover p-8 sm:p-10 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gold-400/10 rounded-2xl flex items-center justify-center group-hover:bg-gold-400/15 transition-colors">
                  <sol.icon className="w-7 h-7 text-gold-400" />
                </div>
                <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold-400/30 group-hover:bg-gold-400/5 transition-all">
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-gold-400 transition-colors" />
                </a>
              </div>

              <h3 className="text-2xl font-semibold mb-3">{sol.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                {sol.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {sol.features.map((f, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-xs bg-white/[0.04] border border-white/[0.06] rounded-full text-white/50"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-baseline gap-3">
                <span className="text-2xl font-bold gradient-text">{sol.stat}</span>
                <span className="text-sm text-white/30">{sol.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
