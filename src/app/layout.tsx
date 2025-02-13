import "@/styles/globals.css";
import { type Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieConsent } from "@/components/ui/cookie-consent";
import Script from "next/script";
import { GA_TRACKING_ID } from "@/lib/gtag";

export const metadata: Metadata = {
  title: "BigBased.AI | Independent Wealth Through AI Trading",
  description: "Build independent wealth with our agentic crypto trading bot powered by advanced AI",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-zinc-950 font-['Neue_Haas_Grotesk_Display_Pro',helvetica,sans-serif]">
        
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </div>
        
      </body>
    </html>
  );
}
