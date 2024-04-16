import { Inter, Helvetica } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { TailwindIndicator } from "./components/TailwindIndicator";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../app/components/Footer";
import ScriptTags from "../app/script";
import StructuredData from "./components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Empower Your Workflow with Free SEO Tools by DevAxon.",
  description:
    "Maximize your website's visibility and performance on search engines with our free SEO tools by DevAxon. The ideal companion for improving your online presence is DevAxon's toolbox, which includes keyword research and on-page optimization. Free PDF tools from DevAxon are available to fulfill your document requirements. Convert, combine, and edit with simplicity on a single, practical platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <ScriptTags />
        <link rel="canonical" href="https://www.seotoolsbydevaxon.com/" />
        <meta
          property="og:title"
          content="Empower Your Workflow with Free SEO Tools by DevAxon."
        />
        <meta property="og:site_name" content="SEO Tools by DevAxon" />
        <meta property="og:url" content="https://www.seotoolsbydevaxon.com/" />
        <meta
          property="og:description"
          content="Maximize your website's visibility and performance on search engines with our free SEO tools by DevAxon. The ideal companion for improving your online presence is DevAxon's toolbox, which includes keyword research and on-page optimization. Free PDF tools from DevAxon are available to fulfill your document requirements. Convert, combine, and edit with simplicity on a single, practical platform."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.seotoolsbydevaxon.com/_next/image?url=%2Fimg%2Flogo2.png&w=256&q=75"
        />
        <StructuredData />
      </head>

      <body className={inter.className}>
        <Header />
        {children}
        <Footer />

        {process.env === "production" && <Analytics />}
      </body>
      <TailwindIndicator />
    </html>
  );
}
