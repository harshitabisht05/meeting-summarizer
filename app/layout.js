import "./globals.css";
import localFont from "next/font/local";

// Register Eurostile
const eurostile = localFont({
  src: "../public/fonts/Eurostile-Regular.woff2",
  variable: "--font-eurostile",
});

// Register Manrope
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
    <html lang="en">
      <body className={`${eurostile.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
