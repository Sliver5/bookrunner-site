"use client";

import {
  Globe,
  Mail,
  FlaskConical,
  Shield,
  Megaphone,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Launch Your Premium Website",
    description:
      "Institutional-grade websites built for fund managers, RIAs, and broker-dealers. Pre-approved templates that pass FINRA review, connected to your existing data hub, and optimized to convert visitors into investors.",
    highlight: "Go live in days, not months",
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: Mail,
    title: "Capital Raising Outreach",
    description:
      "Automated, personalized outreach sequences designed specifically for investor acquisition. Manage your entire LP pipeline from initial contact to commitment letter, with compliance baked in at every step.",
    highlight: "3x more LP meetings booked",
    color: "from-gold-400 to-gold-600",
    bgColor: "bg-gold-400/10",
  },
  {
    icon: FlaskConical,
    title: "A/B Test Your Pitch Language",
    description:
      "Stop guessing what resonates with allocators. Test different pitch narratives, subject lines, and deck messaging across investor segments. Let data tell you which language closes capital.",
    highlight: "+42% average lift in reply rates",
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: Shield,
    title: "FINRA & SEC Compliance Built-In",
    description:
      "Every piece of content — from website copy to outreach emails — runs through our compliance engine. Automated archival, disclaimers, and approval workflows so you never miss a regulatory requirement.",
    highlight: "Zero compliance violations",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Megaphone,
    title: "Social Media That Builds Authority",
    description:
      "Manage compliant social content across LinkedIn, X, and beyond. Our AI suggests content themes, generates posts aligned to your brand voice, and ensures every word passes regulatory review before publishing.",
    highlight: "5x profile engagement growth",
    color: "from-pink-400 to-pink-600",
    bgColor: "bg-pink-400/10",
  },
  {
    icon: BarChart3,
    title: "Deal Flow Intelligence",
    description:
      "Whether you're raising a fund or closing an M&A transaction, track every touchpoint. See which investors engage with your materials, which pitch versions convert, and where to focus your energy next.",
    highlight: "Full pipeline visibility",
    color: "from-cyan-400 to-cyan-600",
    bgColor: "bg-cyan-400/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />
      <div className="container-wide relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-gold-400 mb-4">
            The Complete Platform
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            A premier website is{" "}
            <span className="font-display italic gradient-text">just the start</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Everything you need to build your brand, raise capital, and close deals —
            in one compliant, data-driven platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass-card-hover p-8 group"
            >
              <div
                className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
              >
                <feature.icon className={`w-7 h-7 bg-gradient-to-br ${feature.color} bg-clip-text`} style={{ color: 'inherit' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color}`} />
                <span className="text-sm font-medium text-white/60">{feature.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
