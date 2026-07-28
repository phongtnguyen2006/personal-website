import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const summary =
  "Phong Nguyen — CS and Linguistics at UCLA. I build the plumbing behind AI agents: RAG pipelines, MCP servers, and data infrastructure. Currently an investment software engineer intern at Sixth Street Partners in New York.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ph0ng.vercel.app"),
  title: "Phong Nguyen — CS + Linguistics @ UCLA",
  description: summary,
  keywords: [
    "Phong Nguyen",
    "UCLA",
    "Computer Science",
    "Linguistics",
    "Software Engineer",
    "AI Agents",
    "Model Context Protocol",
    "MCP",
    "RAG",
    "Python",
    "TypeScript",
    "FastAPI",
    "AWS",
    "Data Engineering",
    "Software Engineer Intern",
  ],
  authors: [{ name: "Phong Nguyen", url: "https://github.com/phongtnguyen2006" }],
  creator: "Phong Nguyen",
  openGraph: {
    title: "Phong Nguyen — CS + Linguistics @ UCLA",
    description: summary,
    url: "https://ph0ng.vercel.app",
    siteName: "Phong Nguyen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phong Nguyen — CS + Linguistics @ UCLA",
    description: summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
