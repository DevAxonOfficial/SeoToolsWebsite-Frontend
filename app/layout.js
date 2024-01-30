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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img/Logo3.png" />

        {process.env.NODE_ENV === "production" && (
          <Script type="text/javascript" id="AD">
            {
              (atOptions = {
                key: "1a26ef3314cb0fb63793eb96ad8c870c",
                format: "iframe",
                height: 60,
                width: 468,
                params: {},
              })
            }
            {document.write(
              "<scr" +
                "ipt type=“text/javascript” src=“//www.topcreativeformat.com/1a26ef3314cb0fb63793eb96ad8c870c/invoke.js“></scr" +
                "ipt>"
            )}
          </Script>
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
