import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Stocks & Shares ISA – Invest Tax-Free | EC Markets",
  description:
    "Open a Stocks & Shares ISA with EC Markets. Invest up to £20,000 tax-free with low fees, real-time tracking, and an award-winning app. FCA regulated.",
  keywords: [
    "ISA",
    "Stocks and Shares ISA",
    "tax-free investing",
    "tax-free investing UK",
    "ISA account",
    "investment ISA",
    "EC Markets ISA",
    "UK ISA",
    "stocks ISA",
    "shares ISA",
    "ISA allowance",
    "invest tax-free",
  ],
  authors: [{ name: "EC Markets Group Ltd" }],
  creator: "EC Markets",
  publisher: "EC Markets Group Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.ecmarkets.co.uk/isa",
    siteName: "EC Markets",
    title: "Stocks & Shares ISA – Invest Tax-Free | EC Markets",
    description:
      "Invest up to £20,000 tax-free with EC Markets. Low fees, real-time tracking, FCA regulated. Open your ISA in minutes.",
    images: [
      {
        url: "https://www.ecmarkets.co.uk/isa/og-image.png",
        width: 1200,
        height: 630,
        alt: "EC Markets Stocks & Shares ISA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stocks & Shares ISA – Invest Tax-Free | EC Markets",
    description:
      "Invest up to £20,000 tax-free with EC Markets. Low fees, real-time tracking, FCA regulated.",
  },
  alternates: {
    canonical: "https://www.ecmarkets.co.uk/isa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: "EC Markets Stocks & Shares ISA",
    description:
      "A tax-efficient Individual Savings Account for investing in stocks and shares, offered by EC Markets.",
    provider: {
      "@type": "FinancialService",
      name: "EC Markets Group Ltd",
      url: "https://www.ecmarkets.co.uk",
      areaServed: "GB",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Investment Products",
      },
    },
    feesAndCommissionsSpecification:
      "£0 platform fee. Competitive trading commissions apply.",
    annualPercentageRate: "Variable - depends on investment performance",
  };

  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
