"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  BarChart3,
  Mail,
  Shield,
  Megaphone,
  FlaskConical,
  Users,
  Building2,
  TrendingUp,
  Briefcase,
} from "lucide-react";

const products = [
  { name: "Website Platform", desc: "FINRA-compliant, conversion-optimized sites", icon: Globe },
  { name: "Capital Raising CRM", desc: "Manage investor pipelines end-to-end", icon: BarChart3 },
  { name: "Outreach Engine", desc: "Automated sales sequences that convert", icon: Mail },
  { name: "Compliance Suite", desc: "Built-in FINRA & SEC compliance tools", icon: Shield },
  { name: "Social Media Manager", desc: "Grow your profile with compliant content", icon: Megaphone },
  { name: "A/B Testing Lab", desc: "Test pitch language & optimize conversions", icon: FlaskConical },
];

const solutions = [
  { name: "Fund Managers", desc: "Raise capital faster with institutional-grade tools", icon: TrendingUp },
  { name: "RIAs & Advisors", desc: "Build trust and grow AUM with premium presence", icon: Users },
  { name: "Broker-Dealers", desc: "Scalable platform for your entire firm", icon: Building2 },
  { name: "Investment Banks", desc: "Close deals with data-driven outreach", icon: Briefcase },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-gold-400/20 transition-shadow">
              <span className="text-navy-950 font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight">
              Book<span className="gradient-text">Runner</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
                Products <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {activeDropdown === "products" && (
                <div className="absolute top-full left-0 mt-2 w-[420px] bg-navy-900/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-3 shadow-2xl shadow-black/40 animate-fade-in">
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-white/[0.05] rounded-lg flex items-center justify-center group-hover:bg-gold-400/10 transition-colors mt-0.5">
                        <item.icon className="w-5 h-5 text-gold-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{item.name}</div>
                        <div className="text-xs text-white/50 mt-0.5">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
                Solutions <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-0 mt-2 w-[380px] bg-navy-900/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-3 shadow-2xl shadow-black/40 animate-fade-in">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.05] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-white/[0.05] rounded-lg flex items-center justify-center group-hover:bg-gold-400/10 transition-colors mt-0.5">
                        <item.icon className="w-5 h-5 text-gold-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{item.name}</div>
                        <div className="text-xs text-white/50 mt-0.5">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#how-it-works" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#case-studies" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#pricing" className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors">
              Pricing
            </a>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
              Log in
            </a>
            <a href="#" className="btn-primary !py-2.5 !px-6 text-sm">
              Book a Demo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-white/[0.06] mt-2 pt-4 animate-fade-in">
            <div className="space-y-1">
              <a href="#" className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.03] rounded-xl transition-colors">Products</a>
              <a href="#" className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.03] rounded-xl transition-colors">Solutions</a>
              <a href="#how-it-works" className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.03] rounded-xl transition-colors">How It Works</a>
              <a href="#case-studies" className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.03] rounded-xl transition-colors">Case Studies</a>
              <a href="#pricing" className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.03] rounded-xl transition-colors">Pricing</a>
            </div>
            <div className="mt-4 px-4 space-y-3">
              <a href="#" className="block text-center text-sm text-white/70 py-3">Log in</a>
              <a href="#" className="btn-primary w-full text-sm">Book a Demo</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
