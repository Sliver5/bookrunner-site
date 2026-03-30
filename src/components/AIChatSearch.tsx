"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, ArrowRight, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const KNOWLEDGE_BASE: Record<string, string> = {
  pricing:
    "BookRunner offers three plans: Starter at $499/mo for emerging managers, Growth at $1,499/mo (most popular) for scaling firms, and Enterprise with custom pricing for large organizations. All plans include a free 14-day trial with no credit card required.",
  compliance:
    "BookRunner has built-in FINRA & SEC compliance tools. Every piece of content, outbound message, and website change is reviewed against current advertising rules automatically. We maintain a 99.9% compliance pass rate and are SOC 2 Type II certified.",
  "website|site|web":
    "Our Website Platform lets you launch FINRA-compliant, conversion-optimized sites in minutes. Choose from 40+ templates, customize with drag-and-drop, and publish with real-time compliance scanning. Sites load in under 2 seconds with built-in SEO and AI discovery optimization.",
  "crm|pipeline|investor":
    "The Capital Raising CRM gives you a 360° view of every LP — commitment history, meeting notes, document engagement, and more. Track your pipeline with visual Kanban views, automate follow-ups, and monitor capital committed in real time.",
  "outreach|email|sequence":
    "Our Outreach Engine lets you build multi-channel sequences (email, LinkedIn, calls) with AI personalization. Every message is compliance-scanned before sending, and you get real-time engagement tracking with automatic lead scoring.",
  "social|linkedin|twitter":
    "The Social Media Manager lets you schedule and publish compliant content across LinkedIn and Twitter/X. AI suggests post ideas, compliance reviews every post before publishing, and analytics track what content drives investor interest.",
  "test|a/b|ab|experiment":
    "The A/B Testing Lab lets you run controlled experiments on email subject lines, pitch decks, landing pages, and outreach sequences. Get AI-generated variants, real-time results with confidence intervals, and automatic winner detection.",
  "fund manager|gp|lp|raise|capital":
    "For Fund Managers, BookRunner provides everything you need to run a professional capital raise — LP-facing websites, automated outreach, document tracking, A/B tested pitch language, and pipeline management. Fund managers have raised over $8.2B on our platform.",
  "ria|advisor|wealth|aum":
    "For RIAs & Wealth Advisors, BookRunner helps you build a premium digital presence that attracts high-net-worth clients. Compliant websites, social content, client onboarding automation, and targeted outreach — all with compliance baked in. Clients see an average 340% increase in qualified leads.",
  "broker|dealer|rep":
    "For Broker-Dealers, BookRunner offers centralized control over branding, content, and compliance across hundreds of reps. Deploy compliant websites from templates, enforce firm-level compliance rules, and monitor everything from a single dashboard. 50+ broker-dealers trust us today.",
  "investment bank|ib|m&a|deal":
    "For Investment Banks & Advisors, BookRunner helps you manage multiple live mandates with deal-specific microsites, targeted buyer outreach, engagement tracking, and pipeline reporting. 127+ deals have been closed by IB teams on our platform.",
  "demo|trial|start|sign up|book":
    "You can start a free 14-day trial with no credit card required, or book a personalized demo call with our team. Visit our contact form on any page or book directly at our calendar link.",
};

function findAnswer(query: string): string {
  const q = query.toLowerCase();

  for (const [keys, answer] of Object.entries(KNOWLEDGE_BASE)) {
    const patterns = keys.split("|");
    if (patterns.some((p) => q.includes(p))) {
      return answer;
    }
  }

  return "Great question! I'd love to connect you with our team for a detailed answer. You can book a demo call or fill out our contact form, and someone will get back to you within one business day. In the meantime, you can explore our Products and Solutions pages for more details.";
}

const SUGGESTIONS = [
  "What does BookRunner cost?",
  "How does compliance work?",
  "Tell me about the CRM",
  "Solutions for fund managers",
];

export default function AIChatSearch() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleSend = async (text?: string) => {
    const query = text || input.trim();
    if (!query) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: query }]);
    setTyping(true);

    // Simulate AI thinking delay
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 600));

    const answer = findAnswer(query);
    setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
    setTyping(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-gold-400/20 transition-all duration-300 ${
          open
            ? "bg-navy-800 border border-white/10 rotate-0"
            : "bg-gradient-to-br from-gold-400 to-gold-600 hover:shadow-gold-400/40 hover:scale-105"
        }`}
        aria-label={open ? "Close chat" : "Open AI chat"}
      >
        {open ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6 text-navy-950" />
        )}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-navy-900/98 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden animate-fade-in-up" style={{ maxHeight: "min(600px, calc(100vh - 140px))" }}>
          {/* Header */}
          <div className="px-5 py-4 border-b border-white/[0.06] bg-gradient-to-r from-gold-400/[0.06] to-transparent">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-navy-950" />
              </div>
              <div>
                <div className="text-sm font-semibold">BookRunner AI</div>
                <div className="text-xs text-white/40">Ask anything about our platform</div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ minHeight: 200 }}>
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm text-white/40 text-center mb-4">
                  Hi! I can answer questions about BookRunner&apos;s products, pricing, solutions, and more.
                </p>
                <div className="space-y-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSend(s)}
                      className="w-full text-left px-3 py-2.5 text-sm text-white/50 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:bg-white/[0.06] hover:text-white/70 transition-colors flex items-center justify-between group"
                    >
                      {s}
                      <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/40 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gold-400/20 text-white/90 rounded-br-md"
                      : "bg-white/[0.05] text-white/70 rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-white/[0.05] px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: "0.15s" }} />
                    <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-white/[0.06]">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about products, pricing, compliance..."
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-gold-400/30 transition-all"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || typing}
                className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-gold-400/20 transition-all shrink-0"
              >
                <Send className="w-4 h-4 text-navy-950" />
              </button>
            </div>
            <p className="text-[10px] text-white/15 text-center mt-2">
              AI-powered &middot; Instant answers about BookRunner
            </p>
          </div>
        </div>
      )}
    </>
  );
}
