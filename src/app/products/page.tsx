"use client";

import {
  Globe,
  BarChart3,
  Mail,
  Shield,
  Megaphone,
  FlaskConical,
  ArrowRight,
  Check,
  Zap,
  Lock,
  TrendingUp,
  Users,
  LayoutDashboard,
  LineChart,
  Target,
  FileText,
  Send,
  RefreshCw,
  Eye,
  PieChart,
  Share2,
  Calendar,
  BarChart,
  Sparkles,
  MessageSquare,
  Search,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

const products = [
  {
    id: "website-platform",
    name: "Website Platform",
    tagline: "FINRA-compliant, conversion-optimized sites that build investor confidence.",
    icon: Globe,
    color: "gold",
    description:
      "Launch a premium, institutional-grade website in minutes — not months. Every template is purpose-built for financial services, pre-approved for FINRA compliance, and optimized to convert visitors into qualified leads.",
    features: [
      { icon: LayoutDashboard, title: "Drag-and-Drop Builder", desc: "No code required. Choose from 40+ financial services templates and customize every element." },
      { icon: Shield, title: "Built-In Compliance Review", desc: "Real-time FINRA/SEC content scanning flags issues before you publish — not after." },
      { icon: Zap, title: "Performance Optimized", desc: "Sub-2-second load times with global CDN, image optimization, and lazy loading built in." },
      { icon: Lock, title: "Enterprise Security", desc: "SOC 2 Type II certified. SSL, DDoS protection, and encrypted data at rest included." },
      { icon: LineChart, title: "Conversion Analytics", desc: "Track visitor-to-lead funnels, page engagement, and investor behavior in one dashboard." },
      { icon: Target, title: "SEO & AI Discovery", desc: "Structured data, llms.txt, and AI-native search optimization so investors find you everywhere." },
    ],
    stats: { value: "3.2x", label: "higher conversion rate vs. generic website builders" },
    gradient: "from-gold-400/20 to-amber-500/10",
  },
  {
    id: "capital-raising-crm",
    name: "Capital Raising CRM",
    tagline: "Manage your entire investor pipeline from first touch to close.",
    icon: BarChart3,
    color: "blue",
    description:
      "Purpose-built for capital raises, not retro-fitted from generic sales tools. Track LPs, manage commitments, automate follow-ups, and keep your entire team on the same page from roadshow to final close.",
    features: [
      { icon: Users, title: "Investor Profiles", desc: "360° view of every LP — commitment history, meeting notes, docs shared, and engagement timeline." },
      { icon: TrendingUp, title: "Pipeline Management", desc: "Visual Kanban and list views with custom stages tailored to capital raising workflows." },
      { icon: RefreshCw, title: "Automated Follow-Ups", desc: "Set sequences that trigger based on investor actions — opened deck, visited site, or went quiet." },
      { icon: FileText, title: "Document Tracking", desc: "Know exactly when an investor opens your PPM, how long they spend on each page, and what they revisit." },
      { icon: PieChart, title: "Raise Analytics", desc: "Real-time dashboards showing capital committed, pipeline velocity, and conversion by source." },
      { icon: Calendar, title: "Meeting Scheduler", desc: "Integrated scheduling with calendar sync, timezone detection, and automatic CRM logging." },
    ],
    stats: { value: "$12B+", label: "in capital raised through our CRM pipeline" },
    gradient: "from-blue-400/20 to-cyan-500/10",
  },
  {
    id: "outreach-engine",
    name: "Outreach Engine",
    tagline: "Automated sales sequences that turn cold leads into warm conversations.",
    icon: Mail,
    color: "emerald",
    description:
      "Multi-channel outreach that feels personal at scale. Build email sequences, LinkedIn touches, and call tasks that adapt based on investor engagement — all while staying fully compliant.",
    features: [
      { icon: Send, title: "Multi-Channel Sequences", desc: "Orchestrate email, LinkedIn, and call tasks in unified workflows with smart branching." },
      { icon: Sparkles, title: "AI Personalization", desc: "Dynamic merge fields pull from CRM data, recent news, and fund performance to personalize every touchpoint." },
      { icon: Eye, title: "Engagement Tracking", desc: "Real-time open, click, and reply tracking with automatic lead scoring based on engagement." },
      { icon: Shield, title: "Compliance Guardrails", desc: "Every outbound message is scanned against FINRA advertising rules before it sends." },
      { icon: RefreshCw, title: "A/B Testing Built In", desc: "Test subject lines, body copy, and send times across sequences to find what converts." },
      { icon: BarChart, title: "Deliverability Suite", desc: "Domain warming, bounce management, and inbox placement monitoring keep you out of spam." },
    ],
    stats: { value: "8x", label: "faster investor engagement vs. manual outreach" },
    gradient: "from-emerald-400/20 to-green-500/10",
  },
  {
    id: "compliance-suite",
    name: "Compliance Suite",
    tagline: "Built-in FINRA & SEC compliance tools that protect your firm.",
    icon: Shield,
    color: "violet",
    description:
      "Stop treating compliance as an afterthought. Our suite reviews every piece of content, every outbound message, and every website change against current FINRA and SEC advertising rules — automatically.",
    features: [
      { icon: Search, title: "Real-Time Content Scanning", desc: "AI-powered review flags performance claims, testimonial issues, and misleading language instantly." },
      { icon: FileText, title: "Audit Trail", desc: "Every change, approval, and publication is logged with timestamps and user attribution." },
      { icon: Lock, title: "Role-Based Approvals", desc: "Configure multi-step review workflows with designated compliance officers and escalation paths." },
      { icon: RefreshCw, title: "Regulatory Updates", desc: "Rules engine updates automatically when FINRA or SEC issues new guidance." },
      { icon: Eye, title: "Archive & Retention", desc: "Automatic archival of all communications and website versions per FINRA record-keeping rules." },
      { icon: Check, title: "Compliance Reporting", desc: "One-click reports for audits, exams, and internal reviews with full documentation." },
    ],
    stats: { value: "99.9%", label: "compliance pass rate across all client content" },
    gradient: "from-violet-400/20 to-purple-500/10",
  },
  {
    id: "social-media-manager",
    name: "Social Media Manager",
    tagline: "Grow your profile with compliant, authority-building content.",
    icon: Megaphone,
    color: "pink",
    description:
      "Financial professionals need social media — but one wrong post can trigger a compliance nightmare. Our manager lets you schedule, review, and publish content that builds your brand while staying within regulatory guardrails.",
    features: [
      { icon: Calendar, title: "Content Calendar", desc: "Plan and schedule posts across LinkedIn, Twitter/X, and other platforms from one dashboard." },
      { icon: Sparkles, title: "AI Content Suggestions", desc: "Generate compliant post ideas based on market trends, your fund's news, and industry topics." },
      { icon: Shield, title: "Pre-Publish Compliance", desc: "Every post passes through compliance review before it goes live — no exceptions." },
      { icon: BarChart, title: "Engagement Analytics", desc: "Track follower growth, engagement rates, click-throughs, and which content drives investor interest." },
      { icon: Share2, title: "Team Collaboration", desc: "Multiple team members can draft, review, and approve posts with clear role assignments." },
      { icon: MessageSquare, title: "Comment Monitoring", desc: "AI flags potentially non-compliant comments or questions that need compliance-reviewed responses." },
    ],
    stats: { value: "340%", label: "average increase in qualified inbound leads from social" },
    gradient: "from-pink-400/20 to-rose-500/10",
  },
  {
    id: "ab-testing-lab",
    name: "A/B Testing Lab",
    tagline: "Test pitch language and optimize conversions with data, not guesswork.",
    icon: FlaskConical,
    color: "orange",
    description:
      "Every word matters in capital raising. Our testing lab lets you run controlled experiments on email subject lines, pitch decks, landing pages, and outreach sequences — so you know exactly what language resonates with investors.",
    features: [
      { icon: Target, title: "Multi-Variate Testing", desc: "Test headlines, CTAs, email copy, deck layouts, and more across statistically significant samples." },
      { icon: LineChart, title: "Real-Time Results", desc: "Watch conversion data flow in live with confidence intervals and automatic winner detection." },
      { icon: Sparkles, title: "AI Recommendations", desc: "Get AI-generated copy variants based on what's working across your industry vertical." },
      { icon: Shield, title: "Compliance-Safe Variants", desc: "All test variants are pre-screened for compliance before they enter rotation." },
      { icon: PieChart, title: "Segment Analysis", desc: "Break down results by investor type, geography, fund size, and more to find micro-optimizations." },
      { icon: TrendingUp, title: "Historical Benchmarks", desc: "Compare your results against anonymized industry benchmarks to gauge performance." },
    ],
    stats: { value: "+42%", label: "average improvement in pitch response rates" },
    gradient: "from-orange-400/20 to-amber-500/10",
  },
];

const colorMap: Record<string, string> = {
  gold: "text-gold-400 bg-gold-400/10",
  blue: "text-blue-400 bg-blue-400/10",
  emerald: "text-emerald-400 bg-emerald-400/10",
  violet: "text-violet-400 bg-violet-400/10",
  pink: "text-pink-400 bg-pink-400/10",
  orange: "text-orange-400 bg-orange-400/10",
};

const iconColorMap: Record<string, string> = {
  gold: "text-gold-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  violet: "text-violet-400",
  pink: "text-pink-400",
  orange: "text-orange-400",
};

export default function ProductsPage() {
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
              <Zap className="w-4 h-4 text-gold-400" />
              <span className="text-sm text-white/60">6 Products, One Platform</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
              Everything you need to{" "}
              <span className="font-display italic gradient-text">raise capital</span>{" "}
              and grow your firm
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              From your first website to your hundredth investor outreach, BookRunner gives financial
              services professionals the tools to compete — and win.
            </p>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, idx) => (
        <section
          key={product.id}
          id={product.id}
          className={`relative py-24 ${idx % 2 === 0 ? "" : "bg-navy-900/30"}`}
        >
          <div className="container-wide">
            {/* Product Header */}
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorMap[product.color]}`}>
                  <product.icon className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold">{product.name}</h2>
                </div>
              </div>
              <p className="text-xl text-white/60 mb-2">{product.tagline}</p>
              <p className="text-base text-white/40 leading-relaxed">{product.description}</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {product.features.map((feature) => (
                <div
                  key={feature.title}
                  className="glass-card glass-card-hover p-6 group"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center bg-white/[0.05] group-hover:${colorMap[product.color].split(" ")[1]} transition-colors mb-4`}>
                    <feature.icon className={`w-5 h-5 ${iconColorMap[product.color]}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Stat Banner */}
            <div className={`glass-card p-8 bg-gradient-to-r ${product.gradient}`}>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="text-4xl sm:text-5xl font-bold gradient-text">{product.stats.value}</div>
                <div className="text-white/50 text-lg">{product.stats.label}</div>
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
              Ready to see it in action?
            </h2>
            <p className="text-lg text-white/40">
              Book a personalized demo with our team.
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
