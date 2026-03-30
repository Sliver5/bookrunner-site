import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BookRunner — The Growth Platform for Financial Services",
  description:
    "Premier websites, marketing automation, and capital-raising tools for financial advisors, fund managers, and dealmakers. FINRA-compliant. Data-private. Results-driven.",
  keywords: "financial services marketing, fund marketing, capital raising, FINRA compliant websites, financial advisor websites",
  openGraph: {
    title: "BookRunner — The Growth Platform for Financial Services",
    description:
      "Premier websites, marketing automation, and capital-raising tools built for finance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
