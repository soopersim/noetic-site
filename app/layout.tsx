import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://noetic.app"),
  title: "Noetic — AI Debate Coach & Speaking Practice App",
  description:
    "Noetic helps students speak aloud, debate with AI, and get feedback on clarity, reasoning, structure, confidence, and delivery.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "AI debate coach",
    "debate training app",
    "speaking practice app",
    "public speaking AI",
    "critical thinking app",
    "student debate training",
    "argument practice",
    "AI feedback for students",
  ],
  openGraph: {
    title: "Noetic — AI Debate Coach & Speaking Practice App",
    description:
      "Noetic helps students speak aloud, debate with AI, and get feedback on clarity, reasoning, structure, confidence, and delivery.",
    type: "website",
    url: "https://noetic.app",
    images: [
      {
        url: "/logos/noetic-logo.png",
        width: 512,
        height: 512,
        alt: "Noetic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noetic — AI Debate Coach & Speaking Practice App",
    description:
      "Noetic helps students speak aloud, debate with AI, and get feedback on clarity, reasoning, structure, confidence, and delivery.",
    images: ["/logos/noetic-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
