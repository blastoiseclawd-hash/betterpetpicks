import type { Metadata, Viewport } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/config/site";
import { JsonLd, websiteSchema } from "@/lib/schema";
import "./globals.css";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [{ url: siteConfig.brand.faviconSvg, type: "image/svg+xml" }],
    shortcut: [{ url: siteConfig.brand.faviconSvg, type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: siteConfig.colors.dark,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = siteConfig.analytics.googleAnalyticsId;

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-[#2C1810]">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        <JsonLd data={websiteSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
