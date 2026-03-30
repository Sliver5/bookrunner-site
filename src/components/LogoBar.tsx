"use client";

const logos = [
  "Blackstone", "Citadel", "Bridgewater", "Two Sigma", "Apollo",
  "KKR", "Carlyle", "Sequoia", "Andreessen", "Tiger Global",
  "Point72", "Millennium", "D.E. Shaw", "Ares Capital",
];

export default function LogoBar() {
  return (
    <section className="relative py-16 border-y border-white/[0.04]">
      <div className="container-wide mb-6">
        <p className="text-center text-sm text-white/30 uppercase tracking-widest">
          Trusted by leading financial institutions
        </p>
      </div>
      <div className="logo-scroll-container overflow-hidden">
        <div className="flex animate-scroll w-max">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 sm:mx-12 flex-shrink-0"
            >
              <span className="text-lg sm:text-xl font-bold text-white/[0.15] hover:text-white/30 transition-colors duration-300 whitespace-nowrap tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
