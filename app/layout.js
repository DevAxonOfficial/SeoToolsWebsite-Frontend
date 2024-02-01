import { Inter, Helvetica } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { TailwindIndicator } from "./components/TailwindIndicator";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SEO Tools by DevAxon",
  description: "Created by DevAxon Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img/favicon.ico" />
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
