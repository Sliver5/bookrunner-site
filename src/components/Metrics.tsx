"use client";

const metrics = [
  {
    value: "$12B+",
    label: "Capital raised by our clients",
    detail: "across fund launches, secondaries & direct deals",
  },
  {
    value: "2,400+",
    label: "Financial firms on the platform",
    detail: "fund managers, RIAs, broker-dealers & investment banks",
  },
  {
    value: "8x",
    label: "Faster investor engagement",
    detail: "compared to traditional outreach methods",
  },
  {
    value: "99.9%",
    label: "Compliance pass rate",
    detail: "zero regulatory actions across all client communications",
  },
];

export default function Metrics() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/80 to-navy-950" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="text-center p-8 glass-card group hover:border-gold-400/20 transition-all duration-500"
            >
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-3 group-hover:scale-105 transition-transform duration-500">
                {metric.value}
              </div>
              <div className="text-base font-medium text-white mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-white/30">{metric.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
