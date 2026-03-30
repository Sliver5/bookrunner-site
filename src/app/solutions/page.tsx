"use client";

import {
  TrendingUp,
  Users,
  Building2,
  Briefcase,
  ArrowRight,
  Check,
  Shield,
  Zap,
  Globe,
  Mail,
  BarChart3,
  FlaskConical,
  Megaphone,
  Target,
  LineChart,
  FileText,
  PieChart,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

const solutions = [
  {
    id: "fund-managers",
    name: "Fund Managers",
    tagline: "Raise capital faster with institutional-grade tools built for your workflow.",
    icon: TrendingUp,
    color: "gold",
    heroStat: { value: "$8.2B", label: "raised by fund managers on BookRunner" },
    description:
      "Whether you're launching Fund I or raising your fifth vehicle, BookRunner gives you the infrastructure to run a professional capital raise — without the overhead of a full marketing team. From LP-facing websites to automated outreach, every tool is designed around how fund managers actually raise.",
    useCases: [
      "Launch a compliant fund website with performance data and team bios in under an hour",
      "Automate LP outreach sequences with personalized messaging based on investor preferences",
      "Track document engagement — know when LPs open your PPM and which sections they revisit",
      "A/B test pitch language to find the messaging that drives the highest conversion",
      "Generate compliance-approved social content to build thought leadership between raises",
      "Monitor your entire pipeline from initial contact to capital commitment in one dashboard",
    ],
    productsUsed: [
      { name: "Website Platform", icon: Globe },
      { name: "Capital Raising CRM", icon: BarChart3 },
      { name: "Outreach Engine", icon: Mail },
      { name: "A/B Testing Lab", icon: FlaskConical },
      { name: "Compliance Suite", icon: Shield },
    ],
    testimonial: {
      quote: "We raised $340M for our latest fund, and I credit BookRunner with cutting our fundraising timeline in half. The LP engagement tracking alone is worth the price.",
      name: "Sarah Chen",
      title: "Managing Partner, Apex Growth Capital",
    },
    gradient: "from-gold-400/20 to-amber-500/10",
  },
  {
    id: "rias-advisors",
    name: "RIAs & Wealth Advisors",
    tagline: "Build trust, grow AUM, and attract high-net-worth clients with a premium digital presence.",
    icon: Users,
    color: "blue",
    heroStat: { value: "340%", label: "average increase in qualified inbound leads" },
    description:
      "Your clients research you online before they ever pick up the phone. BookRunner helps RIAs and wealth advisors build the kind of digital presence that attracts high-net-worth individuals — with compliance baked into every touchpoint.",
    useCases: [
      "Build a professional website that positions you as a premium advisor — no designer needed",
      "Publish compliant blog content and market commentary that drives organic traffic",
      "Automate client onboarding sequences with personalized welcome emails and scheduling",
      "Run targeted outreach campaigns to prospects based on AUM, geography, and interests",
      "Schedule and publish LinkedIn content that builds authority without compliance risk",
      "Track which prospects engage with your content and prioritize follow-ups accordingly",
    ],
    productsUsed: [
      { name: "Website Platform", icon: Globe },
      { name: "Social Media Manager", icon: Megaphone },
      { name: "Outreach Engine", icon: Mail },
      { name: "Compliance Suite", icon: Shield },
      { name: "Capital Raising CRM", icon: BarChart3 },
    ],
    testimonial: {
      quote: "Our inbound leads tripled within 90 days of launching our BookRunner site. The compliance automation alone saves our CCO 10+ hours per week.",
      name: "David Park",
      title: "Principal, Meridian Wealth Partners",
    },
    gradient: "from-blue-400/20 to-cyan-500/10",
  },
  {
    id: "broker-dealers",
    name: "Broker-Dealers",
    tagline: "A scalable platform for your entire firm — from home office to 1,000+ reps.",
    icon: Building2,
    color: "emerald",
    heroStat: { value: "50+", label: "broker-dealers managing rep sites on BookRunner" },
    description:
      "Managing compliance across hundreds of registered representatives is a nightmare with generic tools. BookRunner gives broker-dealers centralized control over branding, content, and compliance — while letting individual reps customize their presence within approved guardrails.",
    useCases: [
      "Deploy branded, compliant websites for every rep from a centralized template system",
      "Set firm-level compliance rules that automatically apply to all rep-generated content",
      "Give reps self-service tools to customize their sites while maintaining brand standards",
      "Monitor all rep communications and website changes from a single compliance dashboard",
      "Scale onboarding — new reps get a fully compliant website and outreach toolkit on day one",
      "Generate firm-wide analytics showing which reps, offices, and campaigns perform best",
    ],
    productsUsed: [
      { name: "Website Platform", icon: Globe },
      { name: "Compliance Suite", icon: Shield },
      { name: "Social Media Manager", icon: Megaphone },
      { name: "Capital Raising CRM", icon: BarChart3 },
      { name: "Outreach Engine", icon: Mail },
    ],
    testimonial: {
      quote: "We rolled BookRunner out to 400+ reps in 60 days. Zero compliance violations since launch, and rep satisfaction with the marketing tools is at an all-time high.",
      name: "Michael Torres",
      title: "Chief Compliance Officer, Pacific Securities",
    },
    gradient: "from-emerald-400/20 to-green-500/10",
  },
  {
    id: "investment-banks",
    name: "Investment Banks & Advisors",
    tagline: "Close more deals with data-driven outreach and institutional-grade positioning.",
    icon: Briefcase,
    color: "violet",
    heroStat: { value: "127", label: "deals closed by IB teams using BookRunner" },
    description:
      "For investment banks and M&A advisors, reputation and deal velocity matter. BookRunner gives your team the tools to manage multiple live mandates, run targeted outreach to strategic and financial buyers, and present your firm with the polish that high-value transactions demand.",
    useCases: [
      "Build deal-specific microsites and teaser pages for active mandates",
      "Run multi-channel outreach to targeted buyer lists with personalized messaging",
      "Track buyer engagement with teasers, CIMs, and data room access in real time",
      "A/B test outreach messaging to optimize response rates across buyer segments",
      "Maintain a firm website that showcases tombstones, team credentials, and sector expertise",
      "Generate deal pipeline reports and team activity dashboards for managing directors",
    ],
    productsUsed: [
      { name: "Website Platform", icon: Globe },
      { name: "Outreach Engine", icon: Mail },
      { name: "Capital Raising CRM", icon: BarChart3 },
      { name: "A/B Testing Lab", icon: FlaskConical },
      { name: "Compliance Suite", icon: Shield },
    ],
    testimonial: {
      quote: "We manage 40+ concurrent mandates through BookRunner. The buyer engagement tracking has fundamentally changed how we prioritize follow-ups.",
      name: "Rachel Okafor",
      title: "Director, Ironbridge Advisory",
    },
    gradient: "from-violet-400/20 to-purple-500/10",
  },
];

const colorMap: Record<string, string> = {
  gold: "text-gold-400 bg-gold-400/10",
  blue: "text-blue-400 bg-blue-400/10",
  emerald: "text-emerald-400 bg-emerald-400/10",
  violet: "text-violet-400 bg-violet-400/10",
};

const checkColorMap: Record<string, string> = {
  gold: "text-gold-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  violet: "text-violet-400",
};

export default function SolutionsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-gold-400/[0.07] via-transparent to-transparent rounded-full blur-3xl" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full mb-8 animate-fade-in">
              <Target className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-white/60">Built for Financial Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
              Solutions tailored to{" "}
              <span className="font-display italic gradient-text">how you work</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Whether you&apos;re a solo GP raising Fund I or a broker-dealer with 1,000 reps,
              BookRunner adapts to your workflow, your compliance requirements, and your growth goals.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Sections */}
      {solutions.map((solution, idx) => (
        <section
          key={solution.id}
          id={solution.id}
          className={`relative py-24 ${idx % 2 === 0 ? "" : "bg-navy-900/30"}`}
        >
          <div className="container-wide">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorMap[solution.color]}`}>
                    <solution.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold">{solution.name}</h2>
                </div>
                <p className="text-xl text-white/60 mb-4">{solution.tagline}</p>
                <p className="text-base text-white/40 leading-relaxed">{solution.description}</p>
              </div>

              {/* Hero Stat */}
              <div className={`glass-card p-8 bg-gradient-to-br ${solution.gradient} shrink-0`}>
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">{solution.heroStat.value}</div>
                <div className="text-white/50">{solution.heroStat.label}</div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-8 text-white/80">What you can do with BookRunner</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solution.useCases.map((useCase, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 glass-card glass-card-hover">
                    <Check className={`w-5 h-5 ${checkColorMap[solution.color]} shrink-0 mt-0.5`} />
                    <span className="text-sm text-white/60 leading-relaxed">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Products Used */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-6 text-white/80">Products included</h3>
              <div className="flex flex-wrap gap-3">
                {solution.productsUsed.map((product) => (
                  <a
                    key={product.name}
                    href={`/products#${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2 px-4 py-2.5 glass-card glass-card-hover group"
                  >
                    <product.icon className={`w-4 h-4 ${checkColorMap[solution.color]}`} />
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors">{product.name}</span>
                    <ArrowRight className="w-3 h-3 text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className={`glass-card p-8 bg-gradient-to-r ${solution.gradient} border-l-4 border-l-gold-400/40`}>
              <blockquote className="text-lg text-white/70 leading-relaxed mb-4 italic">
                &ldquo;{solution.testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold text-white">{solution.testimonial.name}</div>
                <div className="text-sm text-white/40">{solution.testimonial.title}</div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Find out how BookRunner works for{" "}
              <span className="font-display italic gradient-text">your firm</span>
            </h2>
            <p className="text-lg text-white/40">
              Get a personalized walkthrough of the platform.
            </p>
          </div>
          <div className="flex justify-center">
            <button onClick={() => setModalOpen(true)} className="btn-primary text-base gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
