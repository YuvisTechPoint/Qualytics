import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import type { Metadata } from "next";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Qualytics | Data Control for Trusted Context",
    template: "%s | Qualytics",
  },
  description:
    "Qualytics validates data at the moment it's used, applying data quality as a shared control layer where AI maintains coverage and your teams govern what trusted means.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://qualytics.ai"),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Qualytics",
  url: "https://qualytics.ai",
  logo: "https://qualytics.ai/images/logo.svg",
  description: "AI-augmented data quality platform for enterprise data governance",
  sameAs: [
    "https://www.linkedin.com/company/qualyticsinc/",
    "https://www.youtube.com/@Qualytics",
    "https://github.com/Qualytics",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-base-bg font-sans text-[#ffffff] antialiased">
        <GoogleTagManager />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
