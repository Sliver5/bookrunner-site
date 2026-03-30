"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Send, Check, Loader2, X } from "lucide-react";

const CALENDAR_URL = "https://calendar.app.google/qguRAdx4XWycYxs4A";

interface LeadModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LeadModal({ open, onClose }: LeadModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const handleClose = () => {
    onClose();
    // Reset after animation
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", role: "", message: "" });
    }, 200);
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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg glass-card p-8 sm:p-10 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-white/30 hover:text-white/70 transition-colors rounded-lg hover:bg-white/[0.05]"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-4">
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
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              <Calendar className="w-4 h-4" />
              Book a Time on My Calendar
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-1">Get started with BookRunner</h3>
            <p className="text-sm text-white/40 mb-6">
              Fill out the form and we&apos;ll reach out within one business day.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-medium text-white/50 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400/30 transition-all"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-medium text-white/50 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    id="modal-email"
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
                  <label htmlFor="modal-company" className="block text-xs font-medium text-white/50 mb-1.5">
                    Company *
                  </label>
                  <input
                    id="modal-company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-gold-400/30 focus:border-gold-400/30 transition-all"
                    placeholder="Apex Capital"
                  />
                </div>
                <div>
                  <label htmlFor="modal-role" className="block text-xs font-medium text-white/50 mb-1.5">
                    Role
                  </label>
                  <select
                    id="modal-role"
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
                <label htmlFor="modal-message" className="block text-xs font-medium text-white/50 mb-1.5">
                  Anything else? (optional)
                </label>
                <textarea
                  id="modal-message"
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
            </form>
          </>
        )}
      </div>
    </div>
  );
}
