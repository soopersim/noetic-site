import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://noetic.app"),
  title: "Noetic — Think Clearly. Argue Better.",
  description:
    "Noetic is an AI-moderated platform for critical thinking and debate. Share a belief, watch it decompose, debate it with peers, and grow your reasoning skills over time.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "critical thinking",
    "debate platform",
    "AI moderation",
    "reasoning skills",
    "student debate",
    "argumentation",
    "peer debate",
    "intellectual growth",
  ],
  openGraph: {
    title: "Noetic — Think Clearly. Argue Better.",
    description:
      "An AI-moderated platform for critical thinking and debate, built for students and young thinkers.",
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
    title: "Noetic — Think Clearly. Argue Better.",
    description:
      "An AI-moderated platform for critical thinking and debate, built for students and young thinkers.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
