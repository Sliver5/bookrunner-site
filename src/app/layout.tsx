import type { Metadata } from "next";
import "./globals.css";
import AIChatSearch from "@/components/AIChatSearch";

export const metadata: Metadata = {
  title: "BookRunner — The Growth Platform for Financial Services",
  description:
    "Premier websites, marketing automation, and capital-raising tools for financial advisors, fund managers, and dealmakers. FINRA-compliant. Data-private. Results-driven.",
  keywords:
    "financial services marketing, fund marketing, capital raising, FINRA compliant websites, financial advisor websites, investor CRM, outreach automation",
  metadataBase: new URL("https://bookrunner.us"),
  openGraph: {
    title: "BookRunner — The Growth Platform for Financial Services",
    description:
      "Premier websites, marketing automation, and capital-raising tools built for finance.",
    type: "website",
    url: "https://bookrunner.us",
    siteName: "BookRunner",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookRunner — The Growth Platform for Financial Services",
    description:
      "Premier websites, marketing automation, and capital-raising tools built for finance.",
  },
  alternates: {
    canonical: "https://bookrunner.us",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BookRunner",
  url: "https://bookrunner.us",
  applicationCategory: "BusinessApplication",
  description:
    "The AI-powered growth platform built exclusively for financial services. Launch FINRA-compliant websites, automate capital-raising outreach, A/B test pitch language, and close more deals.",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "499",
      priceCurrency: "USD",
      description: "For emerging managers — compliant website, basic CRM, email sequences, compliance scanning.",
    },
    {
      "@type": "Offer",
      name: "Growth",
      price: "1499",
      priceCurrency: "USD",
      description: "Most popular — everything in Starter plus A/B testing, social media, advanced analytics.",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      description: "Custom pricing for large firms with dedicated support, SSO, and SLA guarantees.",
    },
  ],
  featureList: [
    "FINRA-compliant website builder",
    "Capital raising CRM",
    "Automated outreach sequences",
    "Compliance suite with real-time scanning",
    "Social media management",
    "A/B testing lab",
    "AI-powered personalization",
  ],
  operatingSystem: "Web",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BookRunner",
  url: "https://bookrunner.us",
  description:
    "AI-powered growth platform for financial services — websites, CRM, outreach, compliance, and more.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://bookrunner.us/#contact",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <AIChatSearch />
      </body>
    </html>
  );
}
