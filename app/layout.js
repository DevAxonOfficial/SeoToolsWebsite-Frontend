import { Inter, Helvetica } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { TailwindIndicator } from "./components/TailwindIndicator";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../app/components/Footer";
import { AdsterraSocialBarAd } from "./AdScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SEO Tools by DevAxon",
  description: "Created by DevAxon Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" sizes="any" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="any"
          href="/favicon-16x16.png"
        />
      </head>

      <body className={inter.className}>
        <Header />
        {children}
        <AdsterraSocialBarAd />
        <Footer />

        {process.env === "production" && <Analytics />}
      </body>
      <TailwindIndicator />
    </html>
  );
}
