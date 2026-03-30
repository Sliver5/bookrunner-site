"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import LeadModal from "@/components/LeadModal";

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "For emerging managers and solo advisors getting started.",
    features: [
      "FINRA-compliant website",
      "Basic CRM (up to 500 contacts)",
      "Social media scheduler",
      "Email outreach (1,000/mo)",
      "Standard compliance review",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$1,499",
    period: "/month",
    description: "For firms actively raising capital or scaling AUM.",
    features: [
      "Everything in Starter, plus:",
      "Advanced CRM with pipeline",
      "A/B testing lab",
      "Outreach automation (10,000/mo)",
      "Data room with analytics",
      "Investor engagement scoring",
      "Priority compliance review",
      "Dedicated account manager",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For broker-dealers, large RIAs, and institutional platforms.",
    features: [
      "Everything in Growth, plus:",
      "Multi-rep site management",
      "SSO & custom integrations",
      "Unlimited outreach volume",
      "White-label option",
      "Centralized compliance dashboard",
      "Custom API access",
      "Dedicated compliance liaison",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="pricing" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/40 to-navy-950" />
      <div className="container-wide relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-gold-400 mb-4">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Invest in your{" "}
            <span className="font-display italic gradient-text">growth</span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Transparent pricing for every stage of your firm. All plans include
            FINRA compliance, data encryption, and SOC 2 security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 sm:p-10 transition-all duration-500 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-gold-400/[0.08] to-transparent border-2 border-gold-400/30 shadow-2xl shadow-gold-400/5 scale-[1.02]"
                  : "glass-card hover:border-white/[0.15]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 text-xs font-bold rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm text-white/40 mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-white/40">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/60">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold transition-all duration-300 group ${
                  plan.highlighted
                    ? "btn-primary"
                    : "btn-secondary"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
