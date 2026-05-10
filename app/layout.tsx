import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#7A1F1F",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://noetic.app"),
  title: {
    default: "Noetic — Think clearly. Argue better.",
    template: "%s | Noetic",
  },
  description:
    "Noetic is an AI-moderated space where young thinkers sharpen how they reason, articulate ideas, and engage in respectful debate. Join the waitlist.",
  keywords: [
    "critical thinking",
    "debate platform",
    "AI moderation",
    "reasoning skills",
    "student debate",
    "argumentation",
    "peer debate",
    "intellectual growth",
    "rhetoric",
    "logic",
  ],
  authors: [{ name: "Noetic" }],
  creator: "Noetic",
  publisher: "Noetic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://noetic.app/en",
  },
  openGraph: {
    title: "Noetic — Think clearly. Argue better.",
    description:
      "Noetic is an AI-moderated space where young thinkers sharpen how they reason, articulate ideas, and engage in respectful debate. Join the waitlist.",
    type: "website",
    url: "https://noetic.app/en",
    siteName: "Noetic",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Noetic — Think clearly. Argue better.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noetic — Think clearly. Argue better.",
    description:
      "Noetic is an AI-moderated space where young thinkers sharpen how they reason, articulate ideas, and engage in respectful debate. Join the waitlist.",
    images: ["/opengraph-image"],
    creator: "@noetic",
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
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
