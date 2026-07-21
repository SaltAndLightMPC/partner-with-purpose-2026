import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  variable: "--font-primary",
  display: "swap",
  src: "./fonts/geist-variable.woff2",
  weight: "100 900",
});

const cormorant = localFont({
  variable: "--font-editorial",
  display: "swap",
  src: [
    { path: "./fonts/cormorant-garamond.woff2", style: "normal", weight: "500 700" },
    { path: "./fonts/cormorant-garamond-italic.woff2", style: "italic", weight: "500 700" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "https://partner-with-purpose-2026.vercel.app"),
  ),
  title: "Back To School on Main 2026 | Partner With Purpose Sponsorship Guide",
  description: "Explore the 2026 Partner With Purpose Sponsorship Guide for Back To School on Main, a Richmond community back-to-school experience offering clothing, inclusive hair services, school resources, music, and community support.",
  openGraph: { title: "Back To School on Main | Partner With Purpose 2026 Sponsorship Guide", description: "A Richmond community back-to-school experience. Sunday, August 23, 2026.", type: "website", locale: "en_US", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Partner With Purpose 2026 Sponsorship Guide for Back To School on Main in Richmond, Virginia" }] },
  twitter: { card: "summary_large_image", title: "Back To School on Main | Partner With Purpose 2026", description: "The official sponsorship guide of Back To School on Main.", images: ["/og.png"] },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "" } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${cormorant.variable}`}>{children}</body></html>;
}
