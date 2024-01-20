import { Inter, Helvetica } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { TailwindIndicator } from "./components/TailwindIndicator";
import Script from "next/script";
import Footer from "../app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SEO Tools by DevAxon",
  description: "Created by DevAxon Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <Script
            async
            id="adsbygoogle-init"
            strategy="lazyOnload"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6379513597707126"
            crossorigin="anonymous"
          ></Script>
        )}
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <TailwindIndicator />
    </html>
  );
}
