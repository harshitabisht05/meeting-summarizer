import "./globals.css";
import localFont from "next/font/local";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./login/page";
import RegisterPage from "./register/page";

// Register Eurostile font
const eurostile = localFont({
  src: "../public/fonts/Eurostile-Regular.woff2",
  variable: "--font-eurostile",
});

// Register Manrope font
const manrope = localFont({
  src: "../public/fonts/manrope-regular.otf",
  variable: "--font-manrope",
});

export const metadata = {
  title: "Meeting Summarizer",
  description: "A tool to summarize meeting notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${eurostile.variable} ${manrope.variable}`}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen">
          <div className="container mx-auto px-4 py-8">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
