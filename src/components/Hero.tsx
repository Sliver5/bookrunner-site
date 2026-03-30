"use client";

import { ArrowRight, Play, Shield, Lock, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-gold-400/[0.07] via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="container-wide relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/[0.08] rounded-full mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-white/60">FINRA-Compliant</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <Lock className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-white/60">SOC 2 Certified</span>
            <span className="w-1 h-1 bg-white/20 rounded-full" />
            <Zap className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-white/60">AI-Powered</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8 animate-fade-in-up">
            The growth platform for{" "}
            <span className="font-display italic gradient-text">
              financial services&apos;
            </span>{" "}
            top performers
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Launch stunning compliant websites, automate capital-raising outreach,
            A/B test your pitch language, and close more deals — all from one
            AI-powered platform built exclusively for finance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="#" className="btn-primary text-base gap-2 group">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="btn-secondary text-base gap-2 group">
              <Play className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
              Tour the Platform
            </a>
          </div>

          {/* Hero visual - Mock dashboard */}
          <div className="relative max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <div className="glass-card p-2 glow-gold">
              <div className="bg-navy-900/80 rounded-xl overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/[0.05] rounded-md px-3 py-1.5 text-xs text-white/30 max-w-md mx-auto">
                      app.bookrunner.com/dashboard
                    </div>
                  </div>
                </div>
                {/* Dashboard mockup */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/[0.03] rounded-xl p-5 border border-white/[0.06]">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Capital Raised</div>
                      <div className="text-2xl sm:text-3xl font-bold gradient-text">$247M</div>
                      <div className="text-xs text-green-400 mt-1">↑ 34% vs last quarter</div>
                    </div>
                    <div className="bg-white/[0.03] rounded-xl p-5 border border-white/[0.06]">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Active Investors</div>
                      <div className="text-2xl sm:text-3xl font-bold text-white">1,847</div>
                      <div className="text-xs text-green-400 mt-1">↑ 22% vs last quarter</div>
                    </div>
                    <div className="bg-white/[0.03] rounded-xl p-5 border border-white/[0.06]">
                      <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Pitch Conversion</div>
                      <div className="text-2xl sm:text-3xl font-bold text-white">18.4%</div>
                      <div className="text-xs text-green-400 mt-1">↑ 8% with A/B testing</div>
                    </div>
                  </div>
                  {/* Chart area */}
                  <div className="bg-white/[0.02] rounded-xl p-5 border border-white/[0.06]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-medium text-white/60">Capital Raising Pipeline</div>
                      <div className="flex gap-2">
                        <div className="px-3 py-1 text-xs bg-gold-400/10 text-gold-400 rounded-full">This Quarter</div>
                        <div className="px-3 py-1 text-xs bg-white/5 text-white/40 rounded-full">Last Quarter</div>
                      </div>
                    </div>
                    <div className="flex items-end gap-2 h-32">
                      {[35, 45, 30, 55, 70, 60, 80, 65, 90, 85, 95, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col gap-1">
                          <div
                            className="w-full bg-gradient-to-t from-gold-400/40 to-gold-400/80 rounded-t-sm transition-all duration-500"
                            style={{ height: `${h}%` }}
                          />
                          <div
                            className="w-full bg-white/10 rounded-t-sm"
                            style={{ height: `${h * 0.6}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating cards */}
            <div className="hidden sm:block absolute -left-8 top-1/3 glass-card p-4 animate-slide-in-left" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-400/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Compliance Check</div>
                  <div className="text-xs text-green-400">All clear — FINRA approved</div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block absolute -right-8 top-1/2 glass-card p-4 animate-slide-in-right" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-400/10 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">A/B Test Winner</div>
                  <div className="text-xs text-gold-400">+42% reply rate on Pitch B</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
