"use client";

import { Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Products: [
    "Website Platform",
    "Capital Raising CRM",
    "Outreach Engine",
    "Compliance Suite",
    "Social Media Manager",
    "A/B Testing Lab",
    "Data Room",
  ],
  Solutions: [
    "Fund Managers",
    "RIAs & Advisors",
    "Broker-Dealers",
    "Investment Banks",
    "Family Offices",
  ],
  Company: [
    "About",
    "Case Studies",
    "Careers",
    "News & Press",
    "Partners",
    "Security",
  ],
  Resources: [
    "Blog",
    "Help Center",
    "API Docs",
    "Compliance Guide",
    "ROI Calculator",
    "Webinars",
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-navy-950">
      <div className="container-wide py-16 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-navy-950 font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Book<span className="gradient-text">Runner</span>
              </span>
            </a>
            <p className="text-sm text-white/30 leading-relaxed mb-6 max-w-xs">
              The growth platform for financial services. Build your brand, raise capital, and close deals — compliantly.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all"
              >
                <Linkedin className="w-4 h-4 text-white/50" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all"
              >
                <Twitter className="w-4 h-4 text-white/50" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-white mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/30 hover:text-white/60 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} BookRunner Technologies, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              Compliance
            </a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
              FINRA Disclosures
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
