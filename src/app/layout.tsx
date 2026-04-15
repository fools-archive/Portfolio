import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/motion/Cursor";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { BackgroundScene } from "@/components/motion/BackgroundScene";
import { site } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  metadataBase: new URL(site.meta.url),
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-[color:var(--color-bg)] text-[color:var(--color-fg)] antialiased grain">
        <BackgroundScene />
        <SmoothScroll>
          <div className="relative z-10">
            <a
              id="top"
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[color:var(--color-fg)] focus:px-4 focus:py-2 focus:text-[color:var(--color-bg)]"
            >
              Skip to content
            </a>
            <Nav />
            <main id="main">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
        <Cursor />
      </body>
    </html>
  );
}
