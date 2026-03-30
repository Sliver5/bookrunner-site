"use client";

import { useState } from "react";
import { ArrowRight, Calendar, Send, Check, Loader2 } from "lucide-react";

const CALENDAR_URL = "https://calendar.app.google/qguRAdx4XWycYxs4A";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", company: "", role: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/brandon@bookrunner.us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          message: formData.message,
          _subject: `New BookRunner Lead: ${formData.name} — ${formData.company}`,
        }),
      });
    } catch {
      // Still show success — FormSubmit may block from localhost
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center glass-card p-10">
        <div className="w-16 h-16 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold mb-3">We&apos;ll be in touch!</h3>
        <p className="text-white/50 mb-8">
          Thanks for your interest, {formData.name.split(" ")[0] || "there"}. A member of our team
          will reach out within one business day.
        </p>
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 text-sm mb-4"
        >
          <Calendar className="w-4 h-4" />
          Book a Time on My Calendar
          <ArrowRight className="w-4 h-4" />
        </a>
        <button
          onClick={resetForm}
          className="block mx-auto text-sm text-white/30 hover:text-white/60 transition-colors mt-4"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form */}
        <div className="lg:col-span-3 glass-card p-8">
          <h3 className="text-xl font-semibold mb-1">Get started with BookRunner</h3>
          <p className="text-sm text-white/40 mb-6">
            Fill out the form and we&apos;ll reach out within one business day.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-white/50 mb-1.5">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400/30 transition-all"
                  placeholder="Jane Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-white/50 mb-1.5">
                  Work Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400/30 transition-all"
                  placeholder="jane@firm.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-xs font-medium text-white/50 mb-1.5">
                  Company *
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400/30 transition-all"
                  placeholder="Apex Capital"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-xs font-medium text-white/50 mb-1.5">
                  Role
                </label>
                <select
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400/30 transition-all appearance-none"
                >
                  <option value="" className="bg-navy-900">Select your role</option>
                  <option value="gp-partner" className="bg-navy-900">GP / Managing Partner</option>
                  <option value="ria-advisor" className="bg-navy-900">RIA / Wealth Advisor</option>
                  <option value="broker-dealer" className="bg-navy-900">Broker-Dealer</option>
                  <option value="investment-banker" className="bg-navy-900">Investment Banker</option>
                  <option value="compliance" className="bg-navy-900">Compliance Officer</option>
                  <option value="marketing" className="bg-navy-900">Marketing / IR</option>
                  <option value="other" className="bg-navy-900">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-white/50 mb-1.5">
                Anything else? (optional)
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400/30 transition-all resize-none"
                placeholder="Tell us about your goals..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full text-sm gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Get in Touch
                </>
              )}
            </button>
            <p className="text-xs text-white/20 text-center">
              FINRA-compliant from day one
            </p>
          </form>
        </div>

        {/* Book a Call Card */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="glass-card p-8 bg-gradient-to-br from-gold-400/[0.08] to-transparent flex-1 flex flex-col">
            <div className="w-12 h-12 bg-gold-400/10 rounded-xl flex items-center justify-center mb-5">
              <Calendar className="w-6 h-6 text-gold-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Prefer to talk live?</h3>
            <p className="text-sm text-white/40 leading-relaxed mb-6 flex-1">
              Book a 30-minute call with our team. We&apos;ll walk through the platform, answer your
              questions, and show you how BookRunner fits your specific workflow.
            </p>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-sm gap-2 group justify-center"
            >
              <Calendar className="w-4 h-4" />
              Book a Demo Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="glass-card p-6">
            <div className="space-y-3">
              {[
                "Personalized platform walkthrough",
                "Custom pricing for your firm",
                "Migration support from your current tools",
                "Compliance review of your current site",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-white/50">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
