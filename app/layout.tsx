import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://noetic.app"),
  title: "Noetic",
  description:
    "Noetic is a thoughtful debate practice platform for learners who want sharper reasoning, calmer reflection, and clearer communication.",
  icons: {
    icon: [
      {
        url: "/logos/noetic-logo.png",
        type: "image/png",
        sizes: "any",
      },
    ],
    shortcut: "/logos/noetic-logo.png",
    apple: "/logos/noetic-logo.png",
  },
  openGraph: {
    title: "Noetic",
    description:
      "Practice thinking clearly. Speak with structure. Join the Noetic waitlist.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noetic",
    description:
      "Practice thinking clearly. Speak with structure. Join the Noetic waitlist.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
